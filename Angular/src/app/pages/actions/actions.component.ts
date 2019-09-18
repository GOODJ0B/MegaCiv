// import { GameService } from 'src/app/shared/services/game.service';
import { Component, OnInit } from '@angular/core';
// import { Game } from 'src/app/shared/model/game';
// import { Subscription } from 'rxjs';
// import { startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'actions.component.html',
  styleUrls: [ './actions.component.scss' ]
})

export class ActionsComponent implements OnInit {
//   game: Game;

//   constructor(public readonly gameService: GameService) { }

  ngOnInit() {
    // this.game = this.gameService.game;
  }

}
