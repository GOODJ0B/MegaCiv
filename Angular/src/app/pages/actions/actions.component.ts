import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';


@Component({
  templateUrl: 'actions.component.html',
  styleUrls: ['./actions.component.scss']
})

export class ActionsComponent {

  constructor(public readonly gameService: GameService) { }

  taxRateChanged() {
    this.gameService.taxCollectionCalculations();
  }

  unitsChanged() {
    this.gameService.getCurrentPlayer().tokensInStock = 
      this.gameService.maxUnits - this.gameService.getCurrentPlayer().tokensOnBoard - this.gameService.getCurrentPlayer().tokensInTreasury;
  }

  stockChanged() {
    this.gameService.getCurrentPlayer().tokensOnBoard = 
      this.gameService.maxUnits - this.gameService.getCurrentPlayer().tokensInStock - this.gameService.getCurrentPlayer().tokensInTreasury;
  }

  citiesOnBoardChanged() {
    this.gameService.getCurrentPlayer().citiesInStock = 
      this.gameService.maxCities - this.gameService.getCurrentPlayer().citiesOnBoard;
  }
}
