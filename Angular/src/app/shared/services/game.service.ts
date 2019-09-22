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
    subscription: Subscription;

    currentPhase = 0;
    readonly maxUnits = 55;
    readonly maxCities = 9;

    playerIndex: number;
    disableReadyButton: boolean;

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
            if(this.currentPhase !== this.game.phase) {
                this.currentPhase = this.game.phase;
                console.log('Phase changed!', this.game.phase);
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
