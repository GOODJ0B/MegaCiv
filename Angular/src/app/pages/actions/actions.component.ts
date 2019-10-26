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
  disableSave: boolean;

  constructor(public readonly gameService: GameService,
              public readonly advancesService: AdvancesService) {
    const checkMonument = this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.MONUMENT);
    const checkWritenRecord = this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.WRITTEN_RECORD);
    if (checkMonument || checkWritenRecord) {
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

  monumentCalculations() {
    let totalMonument = 0;
    if (
      !(this.monumentDiscountToCivics % 5 === 0) ||
      !(this.monumentDiscountToCrafts % 5 === 0) ||
      !(this.monumentDiscountToReligion % 5 === 0) ||
      !(this.monumentDiscountToScience % 5 === 0) ||
      !(this.monumentDiscountToArts % 5 === 0) ||
      !(this.writenRecordDiscountToCivics % 5 === 0) ||
      !(this.writenRecordDiscountToCrafts % 5 === 0) ||
      !(this.writenRecordDiscountToReligion % 5 === 0) ||
      !(this.writenRecordDiscountToScience % 5 === 0) ||
      !(this.writenRecordDiscountToArts % 5 === 0)
    ) {
      return;
    }
    totalMonument += this.monumentDiscountToCivics;
    totalMonument += this.monumentDiscountToArts;
    totalMonument += this.monumentDiscountToCrafts;
    totalMonument += this.monumentDiscountToReligion;
    totalMonument += this.monumentDiscountToScience;
    const monumentOK = totalMonument === 20;
    let totalWritenRecord = 0;
    totalWritenRecord += this.writenRecordDiscountToCivics;
    totalWritenRecord += this.writenRecordDiscountToArts;
    totalWritenRecord += this.writenRecordDiscountToCrafts;
    totalWritenRecord += this.writenRecordDiscountToReligion;
    totalWritenRecord += this.writenRecordDiscountToScience;
    const writenRecordOK = totalWritenRecord === 10;
    const checkMonument = this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.MONUMENT);
    const checkWritenRecord = this.gameService.getCurrentPlayer().selectedAdvances.includes(AdvanceNumber.WRITTEN_RECORD);
    if (checkMonument && checkWritenRecord) {
      this.disableSave = !(monumentOK && writenRecordOK);
    } else if (checkMonument) {
      this.disableSave = !monumentOK;
    } else if (checkWritenRecord) {
      this.disableSave = !writenRecordOK;
    }
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
