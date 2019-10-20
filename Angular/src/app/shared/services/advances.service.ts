import {Injectable} from '@angular/core';
import {GameService} from './game.service';
import {Advance} from '../model/advance.interface';
import {advancesList} from '../model/advances-list';
import {AdvanceTypes} from '../model/advance-types.enum';
import {Player} from '../model/player';
import {Advances} from '../model/advances.enum';

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

  // player is optional, assumes current player if no player is provided
  public playerHasAdvance(advanceType: AdvanceTypes, player?: Player): boolean {
    if (!player) {
      player = this.gameService.getCurrentPlayer();
    }
    return player.ownedAdvances.includes(advanceType);
  }

  private fillLists() {
    this._availableAdvances = [];
    this._ownedAdvances = [];
    for (const advanceType of this.gameService.getCurrentPlayer().ownedAdvances) {
      this._ownedAdvances.push(advancesList[advanceType - 1]);
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

  public buyAdvance(advance: Advance): void {
    this.gameService.getCurrentPlayer().ownedAdvances.push(advance.id);
    this.gameService.sendToOtherPlayers();
  }

  public getAdvance(advanceID: number): Advance {
    return advancesList[advanceID - 1];
  }

  public getAdvanceTypeName(type: AdvanceTypes): string {
    return AdvanceTypes[type];
  }
}
