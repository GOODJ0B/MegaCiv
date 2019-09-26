import { Player } from './player';

export class Game {
    turn = 0;
    phase = 0;
    players: Player[] = [];
    hasStarted = false;

    countDown = 0;

    constructor() {
        this.players.push(new Player('Admin', 0, 0));
        this.players.push(new Player('Minoa', 6, 9));
        this.players.push(new Player('Saba', 6, 9));
        this.players.push(new Player('Assyria', 5, 8));
        this.players.push(new Player('Maurya', 5, 8));
        this.players.push(new Player('Celt', 5, 9));
        this.players.push(new Player('Babylon', 5, 8));
        this.players.push(new Player('Carthage', 5, 9));
        this.players.push(new Player('Dravidia', 5, 8));
        this.players.push(new Player('Hatti', 5, 8));
        this.players.push(new Player('Kushan', 5, 8));
        this.players.push(new Player('Rome', 5, 8));
        this.players.push(new Player('Persia', 5, 8));
        this.players.push(new Player('Iberia', 5, 9));
        this.players.push(new Player('Nubia', 5, 8));
        this.players.push(new Player('Hellas', 5, 8));
        this.players.push(new Player('Indus', 5, 8));
        this.players.push(new Player('Egypt', 5, 8));
        this.players.push(new Player('Parthia', 5, 9));
    }

}
