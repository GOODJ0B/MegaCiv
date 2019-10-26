import {Component} from '@angular/core';
import {GameService} from 'src/app/shared/services/game.service';
import {AdvancesService} from '../../shared/services/advances.service';
import {AdvanceNumber} from '../../shared/model/advances.enum';


@Component({
  templateUrl: 'actions.component.html',
  styleUrls: ['./actions.component.scss']
})

export class ActionsComponent {

  showBuyAdvancePopup: boolean;
  errorMessage: string;

  constructor(public readonly gameService: GameService,
              public readonly advancesService: AdvancesService) {
  }

  taxRateChanged() {
    this.gameService.taxCollectionCalculations(this.gameService.getCurrentPlayer());
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

  citiesInStockChanged() {
    this.gameService.getCurrentPlayer().citiesOnBoard =
      this.gameService.maxCities - this.gameService.getCurrentPlayer().citiesInStock;
  }

  treasuryUsed() { // heeft nog een reset nodig!
    this.gameService.getCurrentPlayer().tokensInTreasury += this.gameService.getCurrentPlayer().treasuryDifference;
  }

  showAdvancesPopup() {
    this.showBuyAdvancePopup = true;
  }

  getTotalCost(): number {
    let output = 0;
    this.advancesService.availableAdvances.forEach(advance => {
      if (advance.isSelected) {
        output += advance.currentPrice;
      }
    });
    return output;
  }

  buyAdvances() {
    let maxTradeCards = this.gameService.game.maxTradecards;
    if (this.advancesService.playerHasAdvance(AdvanceNumber.ROADBUILDING)) {
      maxTradeCards += 1;
    }
    if (this.gameService.getCurrentPlayer().numberOfTradeCards > maxTradeCards) {
      this.errorMessage = 'Je mag er maximaal ' + maxTradeCards + ' overhouden!';
      return;
    } else {
      this.errorMessage = '';
      this.showBuyAdvancePopup = false;
      this.gameService.getCurrentPlayer().selectedAdvances.forEach(
        advanceNumber => this.gameService.getCurrentPlayer().ownedAdvances.push(advanceNumber));
      this.gameService.getCurrentPlayer().tokensInTreasury -= this.gameService.getCurrentPlayer().treasuryDifference;
      this.gameService.getCurrentPlayer().treasuryDifference = 0;
      this.gameService.playerIsReady();
    }
  }
}
