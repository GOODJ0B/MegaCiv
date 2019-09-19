import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {


  constructor(public readonly gameService: GameService) {}

  changeTestValue() {
    this.gameService.game.countDown = 10;
    this.gameService.game.phase += 1;
    this.gameService.getCurrentPlayer().isReady = !this.gameService.getCurrentPlayer().isReady;

    this.gameService.updateGame(this.gameService.game);
  }
}
