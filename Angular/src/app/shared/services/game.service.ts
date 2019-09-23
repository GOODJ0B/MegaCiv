import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Game } from '../model/game';
import { startWith } from 'rxjs/operators';
import { Player } from '../model/player';
import { phases } from '../model/phases';
import { runInThisContext } from 'vm';

@Injectable({ providedIn: 'root' })
export class GameService {
    gameObservable = this.socket.fromEvent<Game>('game');
    game: Game = new Game();
    subscription: Subscription;

    currentPhase = 0;
    readonly maxUnits = 55;
    readonly maxCities = 9;

    playerIndex: number;
    disableReadyButton: boolean;
    disableUnreadyButton: boolean;

    countDown: number;
    countDownInterval;

    constructor(private socket: Socket) {
        this.subscription = this.gameObservable.pipe(
            startWith(this.game)
        ).subscribe(data => {
            if (data.hasStarted === undefined) {
                data = new Game();
            }
            Object.assign(this.game, data);
            console.log('---------------- recieved data: ', this.game);
            if (this.currentPhase !== this.game.phase) {
                this.currentPhase = this.game.phase;
                this.disableReadyButton = false;
                this.disableUnreadyButton = false;
                this.phaseHasChangedActions(this.game.phase);
            }
            if (this.game.countDown > 0) {
                this.startCountDown(this.game.countDown);
                this.game.countDown = 0;
            }
        });
    }

    getCurrentPlayer(): Player {
        if (this.game.players[this.playerIndex]) {
            return this.game.players[this.playerIndex];
        }
        return null;
    }

    sendToOtherPlayers(): void {
        console.log('++++++++++++++++ send game: ', this.game);
        this.socket.emit('updateGame', this.game);
    }

    resetGame(): void {
        console.log('||||||||||||||| reset game.');
        this.socket.emit('resetGame');
    }

    getPhaseName(index?: number): string {
        return phases[index ? index : this.game.phase];
    }

    phaseHasChangedActions(newPhase: number): void {
        if (newPhase === 1) {
            this.taxCollectionCalculations();
            // als de speler geen advance heeft om tax rate aan te passen is hij automatisch ready
            if (!(this.getCurrentPlayer().hasMonarchy || this.getCurrentPlayer().hasCoinage)) {
                this.getCurrentPlayer().isReady = true;
                this.disableUnreadyButton = true;
            }
        }
    }

    taxCollectionCalculations(): void {
        this.getCurrentPlayer().collectedTax = this.getCurrentPlayer().citiesOnBoard * this.getCurrentPlayer().taxRate;
        // check for tax revolt
        if (this.getCurrentPlayer().tokensInStock < this.getCurrentPlayer().collectedTax) {
            if (!this.getCurrentPlayer().hasDemocracy) {
                this.getCurrentPlayer().hasTaxRevolt = true;
            }
            // collected tax can not be more than tokens in stock
            this.getCurrentPlayer().collectedTax = this.getCurrentPlayer().tokensInStock;
        } else {
            this.getCurrentPlayer().hasTaxRevolt = false;
        }
        this.getCurrentPlayer().tokensInTreasury += this.getCurrentPlayer().collectedTax;
        this.getCurrentPlayer().tokensInStock -= this.getCurrentPlayer().collectedTax;
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
}
