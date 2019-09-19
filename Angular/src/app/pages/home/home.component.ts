import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Page } from '../page';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent extends Page implements OnInit, OnDestroy {


  constructor(public readonly gameService: GameService) { super(gameService); }

  changeTestValue() {
    this.game.countDown = 10;
    this.game.phase += 1;
    this.gameService.updateGame(this.game);
  }
}
