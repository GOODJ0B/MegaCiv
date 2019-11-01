import {Subscription} from 'rxjs';
import {Injectable} from '@angular/core';

import {Socket} from 'ngx-socket-io';

import {Game} from '../model/game';
import {startWith} from 'rxjs/operators';
import {Player} from '../model/player';
import {phases} from '../model/phases';
import {AdvanceNumber} from '../model/advances.enum';

@Injectable({providedIn: 'root'})
export class GameService {
  gameObservable = this.socket.fromEvent<Game>('game');
  game: Game = new Game();
  tempGame: Game = new Game();
  gameSubscription: Subscription;

  currentPhase = 0;
  readonly maxUnits = 55;
  readonly maxCities = 9;

  playerIndex: number;
  disableReadyButton: boolean;
  disableUnreadyButton: boolean;
  playersInFrontOfCurrentPlayerInQueue: number;

  countDown: number;
  countDownVisibleString: string;
  countDownInterval: any;

  constructor(private socket: Socket) {
    this.gameSubscription = this.gameObservable.pipe(
      startWith(this.game)
    ).subscribe(data => {
      console.log('---------------- recieved data: ', data);
      if (data.hasStarted === undefined) {
        data = new Game();
      }
      if (data.ignoreAllPlayersBut === undefined || data.ignoreAllPlayersBut === null) {
        Object.assign(this.tempGame, data);
        this.game.players[this.tempGame.ignoreAllPlayersBut] = this.tempGame.players[this.tempGame.ignoreAllPlayersBut];
        for (let i = 0; i < this.game.advancesInPlay.length; i++) {
          this.game.advancesInPlay[i] = this.game.advancesInPlay[i] || this.tempGame.advancesInPlay[i];
        }
        this.game.ignoreAllPlayersBut = undefined;
      } else {
        Object.assign(this.game, data);
      }
      this.incommingGame();
    });
  }

  incommingGame() {
    if (this.currentPhase !== this.game.phase) {
      this.phaseHasChangedActions(this.game.phase);
    }
    if (this.game.countDown > 0) {
      this.startCountDown(this.game.countDown);
      this.game.countDown = 0;
    }
    // count players in queue during phase 3
    if (this.game.phase === 3) {
      let counter = 0;
      this.getActivePlayers().forEach(player => {
        if (!player.isReady && player.censusOrder < this.getCurrentPlayer().censusOrder) {
          counter += 1;
        }
      });
      // Start the countdown if there were players in front of you but not anymore.
      if (this.playersInFrontOfCurrentPlayerInQueue > 0 && counter === 0) {
        this.startCountDown(this.getCurrentPlayer().personalCountDown);
      }
      this.playersInFrontOfCurrentPlayerInQueue = counter;
    }
  }

  playerIsReady(index?: number) {
    let player: Player;
    if (index) {
      player = this.game.players[index];
    } else {
      player = this.getCurrentPlayer();
    }
    player.isReady = true;
    if (this.everybodyIsReady() && this.game.hasStarted) {
      this.nextPhase();
    } else {
      this.sendGameToOtherPlayers();
    }
  }

  everybodyIsReady(): boolean {
    for (const player of this.game.players) {
      if (player.isActive && !player.isReady) {
        return false; // Somebody is not yet ready
      }
    }
    return this.game.players[0].isReady;
  }

  nextPhase() {
    if (!this.game.hasStarted) {
      return;
    }
    if (this.game.phase >= 13) {
      this.game.phase = 1;
      this.game.turn += 1;
    } else {
      this.game.phase += 1;
    }

    // All players are set to unready
    for (const player of this.game.players) {
      if (player.isActive) {
        player.isReady = false;
      }
    }

    // Calculations on phase change to determine readyness and other values
    if (this.game.phase === 1) {
      this.getActivePlayers().forEach(player => {
        this.taxCollectionCalculations(player);
        // als de speler geen advance heeft om tax rate aan te passen is hij automatisch ready
        if (!(player.ownedAdvances.includes(AdvanceNumber.MONARCHY) || player.ownedAdvances.includes(AdvanceNumber.COINAGE))) {
          player.isReady = true;
        }
        // Automatisch door als iedereen ready is:
        // if (this.everybodyIsReady()) {
        //     this.nextPhase();
        // }
      });
    } else if (this.game.phase === 2) {
      // reset de taxRate en berekeningen van fase1
      this.treasuryReset(this.getActivePlayers());
      this.getActivePlayers().forEach(player => {
        player.taxRate = 2;
      });
    } else if (this.game.phase === 3) {
      const playerList = this.getActivePlayers();
      // Sorteer spelers op aantal token (en bij gelijk aantal op originele volgorde)
      playerList.sort((a: Player, b: Player) =>
        b.tokensOnBoard - a.tokensOnBoard === 0 ? a.originalOrder - b.originalOrder : b.tokensOnBoard - a.tokensOnBoard
      );
      // Zet de spelers met Military achteraan de rij
      for (let i = 0; i < playerList.length; i++) {
        playerList[i].censusOrder = playerList[i].ownedAdvances.includes(AdvanceNumber.MILITARY) ? i + playerList.length : i;
      }
      // Sorteer spelers op censusVolgorde
      playerList.sort((a: Player, b: Player) => a.censusOrder - b.censusOrder);
      // Geef iedereen een volgnr (logischer leesbaar)
      for (let i = 0; i < playerList.length; i++) {
        playerList[i].censusOrder = i + 1;
        if (i === 0) {
          playerList[i].personalCountDown = playerList[i].tokensOnBoard * 4;
        } else if (i === 1) {
          playerList[i].personalCountDown = playerList[i].tokensOnBoard * 3,5;
        } else if (i === 2) {
          playerList[i].personalCountDown = playerList[i].tokensOnBoard * 3;
        } else {
          playerList[i].personalCountDown = playerList[i].tokensOnBoard * 2,5;
        }
        if (!playerList[i].ownedAdvances.includes(AdvanceNumber.MILITARY)) {
          playerList[i].personalCountDown += 20;
        }
      }
    } else if (this.game.phase === 4) {
      this.treasuryReset(this.getActivePlayers());
      this.tradecardWonLostReset(this.getActivePlayers());

    } else if (this.game.phase === 5) {
      this.treasuryReset(this.getActivePlayers());

    } else if (this.game.phase === 6) {
      this.treasuryReset(this.getActivePlayers());

    } else if (this.game.phase === 7) {
      this.treasuryReset(this.getActivePlayers());
      this.tradecardBoughtReset(this.getActivePlayers());

      this.game.countDown = 900;

    } else if (this.game.phase === 8) {

    } else if (this.game.phase === 9) {

    } else if (this.game.phase === 10) {

    } else if (this.game.phase === 11) {

    } else if (this.game.phase === 12) {
      this.treasuryReset(this.getActivePlayers());

    } else if (this.game.phase === 13) {
      this.game.players.forEach(player => player.selectedAdvances = []);
    }

    this.sendGameToOtherPlayers();
  }

  // Things that should happen when game arrives with changed phase
  phaseHasChangedActions(newPhase: number): void {
    // check to prevent error on first load
    if (!this.getCurrentPlayer()) {
      return;
    }

    this.currentPhase = this.game.phase;
    this.disableReadyButton = false;
    if (this.getCurrentPlayer().isReady) {
      this.disableUnreadyButton = true;
    } else {
      this.disableUnreadyButton = false;
    }

    if (this.game.phase === 8 && this.countDownInterval) {
      clearInterval(this.countDownInterval);
    }
  }

  taxCollectionCalculations(player: Player): void {
    player.treasuryWon = player.citiesOnBoard * player.taxRate;
    if (player.tokensInStock < player.treasuryWon) {
      if (!player.ownedAdvances.includes(AdvanceNumber.DEMOCRACY)) {
        player.hasTaxRevolt = true;
        this.game.taxRevoltInPlay = true;
      }
      // collected tax can not be more than tokens in stock
      player.treasuryWon = player.tokensInStock;
    } else {
      player.hasTaxRevolt = false;
    }
    
  }

  treasuryCalculations(player: Player): void {
    player.tokensInTreasuryAfterTurn = (player.tokensIntreasuryBeforeTurn + player.treasuryWon - player.treasuryUsed);
  }

  treasuryReset(players: Player[]): void {
    players.forEach(player => {
      player.tokensIntreasuryBeforeTurn = player.tokensInTreasuryAfterTurn;
      player.tokensInStock -= player.treasuryWon += player.treasuryUsed;
      player.treasuryWon = 0;
      player.treasuryUsed = 0;
    });
  }
  
  tradecardBoughtReset(players: Player[]): void {
    players.forEach(player => {
      player.lvl9TradecardsBought = 0;
      player.lvl8TradecardsBought = 0;
      player.lvl7TradecardsBought = 0;
      player.lvl6TradecardsBought = 0;
      player.lvl3TradecardsBought = 0;
      player.lvl2TradecardsBought = 0;
    });
  }

  tradecardWonLostReset(players: Player[]): void {
    players.forEach(player => {
      player.numberOfTradeCardsBeforeTurn = player.numberOfTradeCardsAfterTurn
      player.tradeCardDifference = 0;
    });
  }

  public startCountDown(seconds: number) {
    clearInterval(this.countDownInterval);
    this.countDown = seconds;
    if (this.countDown > 0) {
      const startTime = Date.now();
      this.countDownInterval = setInterval(() => {
        this.countDown = seconds - Math.floor((Date.now() - startTime) / 1000);
        this.updateCountDownVisibleString();
        if (this.countDown < 1) {
          clearInterval(this.countDownInterval);
          this.countDown = 0;
        }
      }, 999);
    }
  }

  updateCountDownVisibleString() {
    const minutes = Math.floor(this.countDown / 60);
    this.countDown = this.countDown - minutes * 60;
    this.countDownVisibleString = `${minutes}:${this.countDown < 10 ? 0 : ''}${this.countDown}`;
  }

  getCurrentPlayer(): Player {
    if (this.game.players[this.playerIndex]) {
      return this.game.players[this.playerIndex];
    }
    return null;
  }

  getActivePlayers(): Player[] {
    const output: Player[] = [];
    this.game.players.forEach(player => {
      if (player.isActive) {
        output.push(player);
      }
    });
    return output;
  }

  sendGameToOtherPlayers(): void {
    console.log('++++++++++++++++ send game: ', this.game);
    this.socket.emit('updateGame', this.game);
  }

  sendPlayerToOtherPlayers(): void {
    console.log('++++++++++++++++ send player: ', this.game);
    this.game.ignoreAllPlayersBut = this.playerIndex;
    this.socket.emit('updateGame', this.game);
  }

  startGame() {
    this.game.hasStarted = true;
    this.game.turn = 1;

    let counter = 0;
    this.game.players.forEach(player => {
      if (player.isActive) {
        counter++;
      }
    });
    this.applyDiscountToAdvances(counter);
    this.createBlock(counter);
    this.maxTradeCards(counter);
    // Start game on phase 2 since nobody has cities yet.
    this.game.phase = 1;
    this.nextPhase();
  }

  applyDiscountToAdvances(numberOfPlayers: number) {
    let discount = 0;
    if (numberOfPlayers === 5) {
      discount = 10;
    } else if (numberOfPlayers === 6 || numberOfPlayers === 12) {
      discount = 5;
    }
    this.game.players.forEach(player => {
      player.discountToArts += discount;
      player.discountToCivics += discount;
      player.discountToCrafts += discount;
      player.discountToReligion += discount;
      player.discountToScience += discount;
    });
  }

  maxTradeCards(numberOfPlayers: number) {
    if (numberOfPlayers < 12) {
      this.game.maxTradecards = 8;
    } else {
      this.game.maxTradecards = 9;
    }
  }

  createBlock(numberOfPlayers: number) {

  }

  resetGame(): void {
    console.log('||||||||||||||| reset game.');
    this.socket.emit('resetGame');
  }

  getPhaseName(index?: number): string {
    return phases[index ? index : this.game.phase];
  }

}
