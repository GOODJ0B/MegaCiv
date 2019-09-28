import { Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import { Socket } from 'ngx-socket-io';

import { Game } from '../model/game';
import { startWith } from 'rxjs/operators';
import { Player } from '../model/player';
import { phases } from '../model/phases';

@Injectable({ providedIn: 'root' })
export class GameService {
    historyObservable = this.socket.fromEvent<Game>('history');
    history: Game[];
    historySubscription: Subscription;


    constructor(private socket: Socket,
        ) {
        this.historySubscription = this.historyObservable.pipe(
            startWith([null])
        ).subscribe(data => {
            Object.assign(this.history, data);
            console.log('---------------- recieved history: ', this.history);
        });
    }
}