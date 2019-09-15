import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Game } from '../model/game.interface';

@Injectable({providedIn: 'root'})
export class GameService {
  game = this.socket.fromEvent<Game>('game');

  constructor(private socket: Socket) { }

  updateGame(game: Game) {
    console.log('emit game: ', game);
    this.socket.emit('updateGame', game);
  }
}
