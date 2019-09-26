import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Game } from '../model/game';
import { startWith } from 'rxjs/operators';
import { Player } from '../model/player';
import { phases } from '../model/phases';

@Injectable({ providedIn: 'root' })
export class GameService {
    gameObservable = this.socket.fromEvent<Game>('game');
    game: Game = new Game();
    gameSubscription: Subscription;
    historyObservable = this.socket.fromEvent<Game>('history');
    history: Game[];
    historySubscription: Subscription;

    currentPhase = 0;
    readonly maxUnits = 55;
    readonly maxCities = 9;

    playerIndex: number;
    disableReadyButton: boolean;
    disableUnreadyButton: boolean;

    countDown: number;
    countDownInterval: any;

    constructor(private socket: Socket) {
        this.gameSubscription = this.gameObservable.pipe(
            startWith(this.game)
        ).subscribe(data => {
            if (data.hasStarted === undefined) {
                data = new Game();
            }
            Object.assign(this.game, data);
            console.log('---------------- recieved data: ', this.game);
            if (this.currentPhase !== this.game.phase) {
                this.phaseHasChangedActions(this.game.phase);
            }
            if (this.game.countDown > 0) {
                this.startCountDown(this.game.countDown);
                this.game.countDown = 0;
            }
        });
        this.historySubscription = this.historyObservable.pipe(
            startWith([this.game])
        ).subscribe(data => {
            Object.assign(this.history, data);
            console.log('---------------- recieved history: ', this.history);
        });
    }

    playerIsReady(index?: number) {
        let player: Player;
        if (index) {
            player = this.game.players[index];
        } else {
            player = this.getCurrentPlayer();
        }

        player.tokensInTreasury += player.treasuryDifference;
        player.treasuryDifference = 0;

        player.isReady = true;

        if (this.everybodyIsReady()) {
            this.nextPhase();
        } else {
            this.sendToOtherPlayers();
        }
    }

    everybodyIsReady(): boolean {
        for (const player of this.game.players) {
            if (player.isActive && !player.isReady) {
                return false; // Somebody is not yet ready
            }
        }
        return true;
    }

    nextPhase() {
        if (!this.game.hasStarted) {
            return;
        }
        if (this.game.phase === 13) {
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
            this.game.players.forEach(player => {
                this.taxCollectionCalculations(player);
                // als de speler geen advance heeft om tax rate aan te passen is hij automatisch ready
                if (!(player.hasMonarchy || player.hasCoinage)) {
                    player.isReady = true;
                }
            });
        } else if (this.game.phase === 2) {
            
        } else if (this.game.phase === 3) {
            const sortedArray = this.game.players.sort((a: Player, b: Player) => a.tokensOnBoard - b.tokensOnBoard);
            for (let i = 0; i < this.game.players.length; i++) {
                sortedArray[i].censusOrder = sortedArray[i].hasMilitary ? i + this.game.players.length : i;
            }
        } else if (this.game.phase === 4) {

        } else if (this.game.phase === 5) {

        } else if (this.game.phase === 6) {

        } else if (this.game.phase === 7) {

        } else if (this.game.phase === 8) {

        } else if (this.game.phase === 9) {

        } else if (this.game.phase === 10) {

        } else if (this.game.phase === 11) {

        } else if (this.game.phase === 12) {

        } else if (this.game.phase === 13) {

        }

        this.sendToOtherPlayers();
    }

    // Things that should happen when game arrives with changed phase
    phaseHasChangedActions(newPhase: number): void {
        this.currentPhase = this.game.phase;
        this.disableReadyButton = false;
        if (this.getCurrentPlayer().isReady) {
            this.disableUnreadyButton = true;
        } else {
            this.disableUnreadyButton = false;
        }
    }

    taxCollectionCalculations(player: Player): void {
        player.collectedTax = player.citiesOnBoard * player.taxRate;
        // check for tax revolt
        if (player.tokensInStock < player.collectedTax) {
            if (!player.hasDemocracy) {
                player.hasTaxRevolt = true;
            }
            // collected tax can not be more than tokens in stock
            player.collectedTax = player.tokensInStock;
        } else {
            player.hasTaxRevolt = false;
        }
        player.tokensInTreasury += player.collectedTax;
        player.tokensInStock -= player.collectedTax;
    }

    public startCountDown(seconds: number) {
        clearInterval(this.countDownInterval);
        this.countDown = seconds;
        if (this.countDown > 0) {
            const startTime = Date.now();
            this.countDownInterval = setInterval(() => {
                this.countDown = seconds - Math.floor((Date.now() - startTime) / 1000);
                if (this.countDown < 1) {
                    clearInterval(this.countDownInterval);
                    this.countDown = 0;
                }
            }, 1000);
        }
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

    sendToOtherPlayers(): void {
        console.log('++++++++++++++++ send game: ', this.game);
        this.socket.emit('updateGame', this.game);
    }

    startGame() {
        this.game.hasStarted = true;
        this.game.turn = 1;
        this.nextPhase();
    }
    resetGame(): void {
        console.log('||||||||||||||| reset game.');
        this.socket.emit('resetGame');
    }

    getPhaseName(index?: number): string {
        return phases[index ? index : this.game.phase];
    }

}
