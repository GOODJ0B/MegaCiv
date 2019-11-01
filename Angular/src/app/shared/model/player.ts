import {AdvanceNumber} from './advances.enum';
import { BlockNumber } from './blocks.enum';

export class Player {
  originalOrder: number;
  isActive = false;
  isReady = false;
  censusOrder = 0;
  civilizationName: string;
  playerName = '';
  citiesOnBoard = 0;
  citiesInStock = 9;
  tokensInStock = 55;
  tokensOnBoard = 0;
  //  tokensInTreasury = 0; //gaat weg
  tokensIntreasuryBeforeTurn = 0;
  treasuryUsed = 0;
  treasuryWon = 0;
  tokensInTreasuryAfterTurn = 0;
  //  treasuryDifference = 0; //gaat weg
  shipsOnBoard = 0;
  score = 0;
  AstNextAgePoint1: number;
  AstNextAgePoint2: number;
  AstNextAgePoint3 = 11;
  AstNextAgePoint4: 14;
  AstEndpoint: 15;
  AstPosition = 0;
  taxRate = 2;
  //  collectedTax = 0; //gaat weg
  hasTaxRevolt = false;
  taxCollected = false;
  hasTimeLeft = 0;
  discountToCivics = 0;
  discountToCrafts = 0;
  discountToReligion = 0;
  discountToScience = 0;
  discountToArts = 0;
  numberOfTradeCardsBeforeTurn = 0;
  numberOfTradeCardsAfterTurn = 0;
  tradeCardDifference = 0;
  tradeCardValueUsed = 0;
  selectedAdvances: AdvanceNumber[] = [];
  ownedAdvances: AdvanceNumber[] = [];
  wotwTradecard = 0;
  lvl9TradecardsBought = 0;
  lvl8TradecardsBought = 0;
  lvl7TradecardsBought = 0;
  lvl6TradecardsBought = 0;
  lvl3TradecardsBought = 0;
  lvl2TradecardsBought = 0;
  personalCountDown = 0;
  block: BlockNumber;
  

  constructor(civilizationName: string, AstNextAgePoint1: number, AstNextAgePoint2: number) {
    this.civilizationName = civilizationName;
    this.AstNextAgePoint1 = AstNextAgePoint1;
    this.AstNextAgePoint2 = AstNextAgePoint2;
  }

}
