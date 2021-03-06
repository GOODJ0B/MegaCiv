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
    if (this.gameService.getCurrentPlayer().treasuryLost === 0 && this.getTotalCost() <= this.gameService.getCurrentPlayer().tradeCardValueUsed) {
      paymentOk = true;
    }else if (!this.gameService.getCurrentPlayer().ownedAdvances.includes(AdvanceNumber.MINING) &&
    (this.getTotalCost() === (this.gameService.getCurrentPlayer().tradeCardValueUsed + this.gameService.getCurrentPlayer().treasuryLost))) {
      paymentOk = true;
    }else if (this.gameService.getCurrentPlayer().ownedAdvances.includes(AdvanceNumber.MINING) && 
    (this.getTotalCost() === (this.gameService.getCurrentPlayer().tradeCardValueUsed + (this.gameService.getCurrentPlayer().treasuryLost *2)) ||
    ((this.getTotalCost() +1) === (this.gameService.getCurrentPlayer().tradeCardValueUsed + (this.gameService.getCurrentPlayer().treasuryLost *2)))))  {
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
    this.gameService.getCurrentPlayer().stocktokensStart =
      this.gameService.maxUnits - this.gameService.getCurrentPlayer().populationStart - this.gameService.getCurrentPlayer().treasuryStart;
  }

  stockChanged() {
    this.gameService.getCurrentPlayer().populationStart =
      this.gameService.maxUnits - this.gameService.getCurrentPlayer().stocktokensStart - this.gameService.getCurrentPlayer().treasuryStart;
  }

  treasuryChanged() {
    this.gameService.getCurrentPlayer().stocktokensStart =
      this.gameService.maxUnits - this.gameService.getCurrentPlayer().populationStart - this.gameService.getCurrentPlayer().treasuryStart;
      this.gameService.getCurrentPlayer().treasuryEnd = this.gameService.getCurrentPlayer().treasuryStart;
  }

  citiesOnBoardChanged() {
    this.gameService.getCurrentPlayer().stockcitiesStart =
      this.gameService.maxCities - this.gameService.getCurrentPlayer().citiesStart;
  }

  citiesInStockChanged() {
    this.gameService.getCurrentPlayer().citiesStart =
      this.gameService.maxCities - this.gameService.getCurrentPlayer().stockcitiesStart;
  }

  treasuryUsed() {
    this.gameService.treasuryCalculations(this.gameService.getCurrentPlayer());
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
    if (this.gameService.getCurrentPlayer().numberOfTradeCardsAfterTurn > maxTradeCards) {
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
      this.gameService.treasuryCalculations(this.gameService.getCurrentPlayer());
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

  buyTradecard() {
    this.gameService.getCurrentPlayer().treasuryLost = 0 + this.gameService.getCurrentPlayer().lvl9TradecardsBought * 15 + this.gameService.getCurrentPlayer().lvl8TradecardsBought *13 +
      this.gameService.getCurrentPlayer().lvl7TradecardsBought * 13 + this.gameService.getCurrentPlayer().lvl6TradecardsBought * 13 + 
      this.gameService.getCurrentPlayer().lvl3TradecardsBought * 9 + this.gameService.getCurrentPlayer().lvl2TradecardsBought * 5;
    this.gameService.treasuryCalculations(this.gameService.getCurrentPlayer());
  }

  tradecardWonOrLost(){
    this.gameService.getCurrentPlayer().numberOfTradeCardsAfterTurn = this.gameService.getCurrentPlayer().numberOfTradeCardsBeforeTurn + this.gameService.getCurrentPlayer().tradeCardDifference;
  }

  recalculateScore() {
    this.gameService.getCurrentPlayer().score = (this.gameService.getCurrentPlayer().ASTPosition *5) + this.gameService.getCurrentPlayer().advancesPoints + 
      this.gameService.getCurrentPlayer().citiesStart;
  }
}
