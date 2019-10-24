import { AdvanceNumber } from './advances.enum';

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
  tokensInTreasury = 0;
  treasuryDifference = 0;
  tokensOnBoard = 0;
  shipsOnBoard = 0;
  score = 0;
  AstNextAgePoint1: number;
  AstNextAgePoint2: number;
  AstNextAgePoint3 = 11;
  AstNextAgePoint4: 14;
  AstEndpoint: 15;
  AstPosition = 0;
  taxRate = 2;
  collectedTax = 0;
  hasTaxRevolt = false;
  taxCollected = false;
  hasTimeLeft = 0;
  ownedAdvances: AdvanceNumber[] = [];

  // Advances:
  personalCountDown = 0;

  constructor(civilizationName: string, AstNextAgePoint1: number, AstNextAgePoint2: number) {
    this.civilizationName = civilizationName;
    this.AstNextAgePoint1 = AstNextAgePoint1;
    this.AstNextAgePoint2 = AstNextAgePoint2;
  }
}
