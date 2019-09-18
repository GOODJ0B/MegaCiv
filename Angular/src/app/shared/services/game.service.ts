import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Game } from '../model/game';
import { startWith } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class GameService {
  game = this.socket.fromEvent<Game>('game');
  countDown: number;

  constructor(private socket: Socket) {
  }

  updateGame(game: Game) {
    console.log('send game: ', game);
    this.socket.emit('updateGame', game);
  }

  public startCountDown(seconds: number) {
    console.log('arrived in setter');
    this.countDown = seconds;
    let timerRef;
    if (this.countDown > 0) {
        const startTime = Date.now();
        console.log('start!');
        timerRef = setInterval(() => {
            this.countDown = seconds - Math.floor((Date.now() - startTime) / 1000);
            if (this.countDown < 1) {
                clearInterval(timerRef);
                this.countDown = 0;
            }
        });
    } else {
        clearInterval(timerRef);
    }
}
}
