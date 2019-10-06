import {Injectable} from '@angular/core';
import {GameService} from './game.service';
import {Advance} from '../model/advance.interface';
import {advancesList} from '../model/advances-list';
import {AdvanceTypes} from '../model/advance-types.enum';

@Injectable({providedIn: 'root'})
export class AdvancesService {

  private _availableAdvances: Advance[];
  get availableAdvances(): Advance[]{
    if (!this._availableAdvances || this.gameService.getCurrentPlayer().ownedAdvances.length !== this._ownedAdvances.length) {
      this.fillLists();
    }
    return this._availableAdvances;
  }

  private _ownedAdvances: Advance[];
  get ownedAdvances(): Advance[]{
    if (!this._ownedAdvances || this.gameService.getCurrentPlayer().ownedAdvances.length !== this._ownedAdvances.length) {
      this.fillLists();
    }
    return this._ownedAdvances;
  }

  constructor(private readonly gameService: GameService) {
  }

  private fillLists() {
    this._availableAdvances = [];
    this._ownedAdvances = [];
    for (const advanceType of this.gameService.getCurrentPlayer().ownedAdvances) {
      this._ownedAdvances.push(advancesList[advanceType]);
    }
    for (const advance of advancesList) {
      if (!this._ownedAdvances.includes(advance)) {
        this.calculatePrice(advance);
        this._availableAdvances.push(advance);
      }
    }
  }

  private calculatePrice(advance: Advance) {
    let price = advance.cost;

    for (const ownedAdvance of this._ownedAdvances) {
      if (advance.type1 === AdvanceTypes.ARTS) {
        price -= ownedAdvance.discountToArts;
      } else if (advance.type1 === AdvanceTypes.CIVICS) {
        price -= ownedAdvance.discountToCivics;
      } else if (advance.type1 === AdvanceTypes.CRAFTS) {
        price -= ownedAdvance.discountToCrafts;
      } else if (advance.type1 === AdvanceTypes.RELIGION) {
        price -= ownedAdvance.discountToReligion;
      } else if (advance.type1 === AdvanceTypes.SCIENCE) {
        price -= ownedAdvance.discountToScience;
      }
      if (advance.discountFromCard === ownedAdvance.id) {
        price -= advance.discountFromCardAmount;
      }
    }
    advance.currentPrice = price;
  }
}
