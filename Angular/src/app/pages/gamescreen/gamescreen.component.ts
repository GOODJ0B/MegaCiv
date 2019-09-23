import { GameService } from './../../shared/services/game.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'gamescreen.component.html'
})

export class GamescreenComponent {
  dataSource: any;
  priority: any[];

  constructor(public readonly gameService: GameService) {
  }
}
