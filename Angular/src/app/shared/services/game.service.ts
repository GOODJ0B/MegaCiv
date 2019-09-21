import { Subscription } from 'rxjs';
import { Injectable, OnInit, AfterViewInit } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Game } from '../model/game';
import { startWith } from 'rxjs/operators';
import { Player } from '../model/player';

@Injectable({ providedIn: 'root' })
export class GameService {
    gameObservable = this.socket.fromEvent<Game>('game');
    game: Game = new Game();
    subscription: Subscription;

    playerIndex: number = 1;

    countDown: number;
    countDownInterval;

    constructor(private socket: Socket) {
        this.subscription = this.gameObservable.pipe(
            startWith(this.game)
        ).subscribe(data => {
            if (!data.phase) {
                data = new Game();
            }
            Object.assign(this.game, data);
            console.log('---------------- recieved data: ', this.game);
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
        return new Player('', 0, 0);
    }

    updateGame(game: Game) {
        console.log('++++++++++++++++ send game: ', game);
        this.socket.emit('updateGame', game);
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
