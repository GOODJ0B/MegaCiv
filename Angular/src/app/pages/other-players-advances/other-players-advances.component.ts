import {Component} from '@angular/core';
import {GameService} from 'src/app/shared/services/game.service';
import {AdvancesService} from '../../shared/services/advances.service';
import {Player} from '../../shared/model/player';

@Component({
  templateUrl: 'other-players-advances.component.html',
  styleUrls: ['./other-players-advances.component.scss']
})

export class OtherPlayersAdvancesComponent {

  selectedPlayer: Player;
  showAdvancesPopup: boolean;

  constructor(public readonly gameService: GameService,
              public readonly advancesService: AdvancesService) {
  }

  showPopup(player: Player) {
    this.selectedPlayer = player;
    this.showAdvancesPopup = true;
  }
}
