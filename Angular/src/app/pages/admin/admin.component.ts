import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';

@Component({
  templateUrl: 'admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent {


  constructor(public readonly gameService: GameService) {}

  resetGame() {
    this.gameService.resetGame();
  }
}
