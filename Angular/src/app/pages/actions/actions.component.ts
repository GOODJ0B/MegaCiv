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
  monumentDiscountToCivics = 0;
  monumentDiscountToCrafts = 0;
  monumentDiscountToReligion = 0;
  monumentDiscountToScience = 0;
  monumentDiscountToArts = 0;
  writenRecordDiscountToCivics = 0;
  writenRecordDiscountToCrafts = 0;
  writenRecordDiscountToReligion = 0;
  writenRecordDiscountToScience = 0;
  writenRecordDiscountToArts = 0;
  disableSave = false;

  get advanceNumber() {
    return AdvanceNumber;
  }
  
  constructor(public readonly gameService: GameService,
              public readonly advancesService: AdvancesService) {
    const checkMonument = this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.MONUMENT);
    const checkWritenRecord = this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.WRITTEN_RECORD);
    this.readyToSaveCheck();
  }

  readyToSaveCheck() {
    let paymentOk = false;
    if (this.gameService.getCurrentPlayer().treasuryDifference === 0 && this.getTotalCost() <= this.gameService.getCurrentPlayer().tradeCardValueUsed) {
      paymentOk = true;
    }else if (!this.gameService.getCurrentPlayer().ownedAdvances.includes(AdvanceNumber.MINING) &&
    (this.getTotalCost() === (this.gameService.getCurrentPlayer().tradeCardValueUsed + this.gameService.getCurrentPlayer().treasuryDifference))) {
      paymentOk = true;
    }else if (this.gameService.getCurrentPlayer().ownedAdvances.includes(AdvanceNumber.MINING) && 
    (this.getTotalCost() === (this.gameService.getCurrentPlayer().tradeCardValueUsed + (this.gameService.getCurrentPlayer().treasuryDifference *2)) ||
    ((this.getTotalCost() +1) === (this.gameService.getCurrentPlayer().tradeCardValueUsed + (this.gameService.getCurrentPlayer().treasuryDifference *2)))))  {
      paymentOk = true;
    }
    let writtenRecordOk = !this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.WRITTEN_RECORD);
    if ((this.writenRecordDiscountToCivics % 5 === 0) &&
    (this.writenRecordDiscountToCrafts % 5 === 0) &&
    (this.writenRecordDiscountToReligion % 5 === 0) &&
    (this.writenRecordDiscountToScience % 5 === 0) &&
    (this.writenRecordDiscountToArts % 5 === 0) &&
    ((this.writenRecordDiscountToArts + this.writenRecordDiscountToCivics + this.writenRecordDiscountToCrafts +
    this.writenRecordDiscountToReligion + this.writenRecordDiscountToScience) === 10)) {
      writtenRecordOk = true;
    }
    let monumentOk = !this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.MONUMENT);
    if ((this.monumentDiscountToCivics % 5 === 0) &&
    (this.monumentDiscountToCrafts % 5 === 0) &&
    (this.monumentDiscountToReligion % 5 === 0) &&
    (this.monumentDiscountToScience % 5 === 0) &&
    (this.monumentDiscountToArts % 5 === 0) &&
    ((this.monumentDiscountToArts + this.monumentDiscountToCivics + this.monumentDiscountToCrafts +
    this.monumentDiscountToReligion + this.monumentDiscountToScience) === 20)) {
      monumentOk = true;
    }
    if (paymentOk && writtenRecordOk && monumentOk) {
      this.disableSave = false;
    }else {
      this.disableSave = true;
    }
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
    this.advancesService.selectedAdvances.forEach(advance => {
      output += advance.currentPrice;
    });
    if (this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.LIBRARY) && this.gameService.getCurrentPlayer().selectedAdvances.length > 1) {
      output -= 40;
    }
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
      this.gameService.getCurrentPlayer().selectedAdvances.forEach(advanceNumber => {
        if (!this.gameService.getCurrentPlayer().ownedAdvances.includes(advanceNumber)) {
          this.gameService.getCurrentPlayer().ownedAdvances.push(advanceNumber);
          this.gameService.game.advancesInPlay[advanceNumber] = true;
        }
      });
      this.gameService.getCurrentPlayer().tokensInTreasury -= this.gameService.getCurrentPlayer().treasuryDifference;
      this.gameService.getCurrentPlayer().treasuryDifference = 0;
      this.gameService.getCurrentPlayer().discountToScience += this.monumentDiscountToScience + this.writenRecordDiscountToScience;
      this.gameService.getCurrentPlayer().discountToReligion += this.monumentDiscountToReligion + this.writenRecordDiscountToReligion;
      this.gameService.getCurrentPlayer().discountToCrafts += this.monumentDiscountToCrafts + this.writenRecordDiscountToCrafts;
      this.gameService.getCurrentPlayer().discountToCivics += this.monumentDiscountToCivics + this.writenRecordDiscountToCivics;
      this.gameService.getCurrentPlayer().discountToArts += this.monumentDiscountToArts + this.writenRecordDiscountToArts;
      this.resetDiscounts();
      this.gameService.playerIsReady();
    }
  }

  private resetDiscounts() {
    this.monumentDiscountToCivics = 0;
    this.monumentDiscountToCrafts = 0;
    this.monumentDiscountToReligion = 0;
    this.monumentDiscountToScience = 0;
    this.monumentDiscountToArts = 0;
    this.writenRecordDiscountToCivics = 0;
    this.writenRecordDiscountToCrafts = 0;
    this.writenRecordDiscountToReligion = 0;
    this.writenRecordDiscountToScience = 0;
    this.writenRecordDiscountToArts = 0;
  }
}
