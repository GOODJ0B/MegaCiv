import {AdvanceTypes} from './advance-types.enum';


export interface Advance {
  id: number;
  name: string;
  description: string;
  cost: number;
  currentPrice: number;
  points: number;
  type1: AdvanceTypes;
  type2: AdvanceTypes;
  discountToCivics: number;
  discountToCrafts: number;
  discountToReligion: number;
  discountToScience: number;
  discountToArts: number;
  discountFromCard: AdvanceTypes;
  discountFromCardAmount: number;
  discountToCard: AdvanceTypes;
  discountToCardAmount: number;
}
