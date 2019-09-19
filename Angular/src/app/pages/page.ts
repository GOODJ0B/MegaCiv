import { OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Game } from 'src/app/shared/model/game';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';


export class Page {

  // game: Game = new Game();

  // subscription: Subscription;

  // constructor(public readonly gameService: GameService) { }

  // ngOnInit() {
  //   this.subscription = this.gameService.game.pipe(
  //     startWith(new Game())
  //   ).subscribe(data => {
  //     if (!data.phase) {
  //       data = new Game();
  //     }
  //     Object.assign(this.game, data);
  //     console.log('recieved data: ', this.game);
  //     if (this.game.countDown > 0) {
  //       console.log('start countdown!');
  //       this.gameService.startCountDown(this.game.countDown);
  //       this.game.countDown = 0;
  //     }
  //   });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
