export class Player {
    isActive = false;
    isReady = false;
    civilizationName: string;
    playerName = '';
    cities = 0;
    stock = 55;
    treasury = 0;
    units = 0;
    score = 0;
    AstNextAgePoint1: number;
    AstNextAgePoint2: number;
    AstNextAgePoint3 = 11;
    AstNextAgePoint4: 14;
    AstEndpoint: 15;
    AstPosition = 0;
    taxRate = 2;
    hasTaxRevolt = false;
    hasTimeLeft = 0;

    // Advances:
    hasMilitary: boolean;
    hasCulturalAscendancy: boolean;

    constructor(civilizationName: string, AstNextAgePoint1: number, AstNextAgePoint2: number){
        this.civilizationName = civilizationName;
        this.AstNextAgePoint1 = AstNextAgePoint1;
        this.AstNextAgePoint2 = AstNextAgePoint2;
    }
}
