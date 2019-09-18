export class Player {
    isActive: boolean;
    isReady: boolean;
    civilizationName: string;
    playerName: string;
    cities: number;
    stock = 55;
    treasury: number;
    units: number;
    score: number;
    AstNextAgePoint1: number;
    AstNextAgePoint2: number;
    AstNextAgePoint3 = 11;
    AstNextAgePoint4: 14;
    AstEndpoint: 15;
    AstPosition = 0;
    taxRate = 2;
    hasTaxRevolt: boolean;
    hasTimeLeft: number;

    // Advances:
    hasMilitary: boolean;
    hasCulturalAscendancy: boolean;

    constructor(civilizationName: string, AstNextAgePoint1: number, AstNextAgePoint2: number){
        this.civilizationName = civilizationName;
        this.AstNextAgePoint1 = AstNextAgePoint1;
        this.AstNextAgePoint2 = AstNextAgePoint2;
    }
}
