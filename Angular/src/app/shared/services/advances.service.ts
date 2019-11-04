import { Injectable } from '@angular/core';
import { AdvanceTypes } from '../model/advance-types.enum';
import { Advance } from '../model/advance.interface';
import { advancesList } from '../model/advances-list';
import { AdvanceNumber } from '../model/advances.enum';
import { Player } from '../model/player';
import { GameService } from './game.service';

@Injectable({providedIn: 'root'})
export class AdvancesService {

  private _availableAdvances: Advance[];
  get availableAdvances(): Advance[] {
    if (!this._availableAdvances || this.gameService.getCurrentPlayer().ownedAdvances.length !== this._ownedAdvances.length) {
      this.fillLists();
    }
    return this._availableAdvances;
  }

  private _ownedAdvances: Advance[];
  get ownedAdvances(): Advance[] {
    if (!this._ownedAdvances || this.gameService.getCurrentPlayer().ownedAdvances.length !== this._ownedAdvances.length) {
      this.fillLists();
    }
    return this._ownedAdvances;
  }

  constructor(private readonly gameService: GameService) {
  }

  private _selectedAdvances: Advance[];
  get selectedAdvances(): Advance[] {
    if (!this._selectedAdvances || this.gameService.getCurrentPlayer().selectedAdvances.length !== this._selectedAdvances.length) {
      this.fillSelectedAdvancesList();
    }
    return this._selectedAdvances;
  }

  // player is optional, assumes current player if no player is provided
  public playerHasAdvance(advanceNumber: AdvanceNumber, player?: Player): boolean {
    if (!player) {
      player = this.gameService.getCurrentPlayer();
    }
    return player.ownedAdvances.includes(advanceNumber);
  }

  private fillLists() {
    this._availableAdvances = [];
    this._ownedAdvances = [];
    for (const advanceType of this.gameService.getCurrentPlayer().ownedAdvances) {
      this._ownedAdvances.push(advancesList[advanceType - 1]);
    }
    for (const advance of advancesList) {
      if (!this._ownedAdvances.includes(advance)) {
        if (advance.type2) {
          const cost1 = this.calculatePrice(advance, advance.type1);
          const cost2 = this.calculatePrice(advance, advance.type2);
          advance.currentPrice = cost1 < cost2 ? cost1 : cost2;
        } else {
          advance.currentPrice = this.calculatePrice(advance, advance.type1);
        }
        this._availableAdvances.push(advance);
      }
    }
    this._availableAdvances.sort((a: Advance, b: Advance) => a.currentPrice - b.currentPrice);
    this._ownedAdvances.sort((a: Advance, b: Advance) => a.cost - b.cost);
  }

  private fillSelectedAdvancesList() {
    this._selectedAdvances = [];
    for (const advance of advancesList) {
      if (this.gameService.getCurrentPlayer().selectedAdvances.includes(advance.id)) {
        if (advance.type2) {
          const cost1 = this.calculatePrice(advance, advance.type1);
          const cost2 = this.calculatePrice(advance, advance.type2);
          advance.currentPrice = cost1 < cost2 ? cost1 : cost2;
        } else {
          advance.currentPrice = this.calculatePrice(advance, advance.type1);
        }
        this._selectedAdvances.push(advance);
      }
    }
  }

  private calculatePrice(advance: Advance, type: AdvanceTypes): number {
    let price = advance.cost;
    if (type === AdvanceTypes.ARTS) {
      price -= this.gameService.getCurrentPlayer().discountToArts;
    } else if (type === AdvanceTypes.CIVICS) {
      price -= this.gameService.getCurrentPlayer().discountToCivics;
    } else if (type === AdvanceTypes.CRAFTS) {
      price -= this.gameService.getCurrentPlayer().discountToCrafts;
    } else if (type === AdvanceTypes.RELIGION) {
      price -= this.gameService.getCurrentPlayer().discountToReligion;
    } else if (type === AdvanceTypes.SCIENCE) {
      price -= this.gameService.getCurrentPlayer().discountToScience;
    }
    for (const ownedAdvance of this.ownedAdvances) {
      if (type === AdvanceTypes.ARTS) {
        price -= ownedAdvance.discountToArts;
      } else if (type === AdvanceTypes.CIVICS) {
        price -= ownedAdvance.discountToCivics;
      } else if (type === AdvanceTypes.CRAFTS) {
        price -= ownedAdvance.discountToCrafts;
      } else if (type === AdvanceTypes.RELIGION) {
        price -= ownedAdvance.discountToReligion;
      } else if (type === AdvanceTypes.SCIENCE) {
        price -= ownedAdvance.discountToScience;
      }
      if (advance.discountFromCard === ownedAdvance.id) {
        price -= advance.discountFromCardAmount;
      }
    }
    if (price < 0) {
      price = 0;
    }
    return price;
  }

  // wordt niet gebruikt?
  public buyAdvance(advance: Advance): void {
    if (!this.gameService.getCurrentPlayer().ownedAdvances.includes(advance.id)) {
      this.gameService.getCurrentPlayer().ownedAdvances.push(advance.id);
      this.gameService.game.advancesInPlay[advance.id] = true;
      this.gameService.sendPlayerToOtherPlayers();
    }
  }

  public getAdvance(advanceID: number): Advance {
    return advancesList[advanceID - 1];
  }

  public getAdvanceName(advance: AdvanceNumber): string {
    return advancesList[advance].name;
  }

  public getAdvanceTypeName(type: AdvanceTypes): string {
    return AdvanceTypes[type];
  }

  public getOwnedAdvancesOfPlayer(player: Player): Advance[] {
    const output: Advance[] = [];
    for (const advanceType of player.ownedAdvances) {
      output.push(advancesList[advanceType - 1]);
    }
    return output;
  }
}
