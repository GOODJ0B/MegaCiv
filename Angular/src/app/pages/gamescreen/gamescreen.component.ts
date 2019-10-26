import {GameService} from './../../shared/services/game.service';
import {Component} from '@angular/core';
import {AdvancesService} from '../../shared/services/advances.service';

@Component({
  templateUrl: 'gamescreen.component.html'
})

export class GamescreenComponent {
  dataSource: any;
  priority: any[];

  constructor(public readonly gameService: GameService,
              public readonly advancesService: AdvancesService) {
  }


  setCellStyling(event: any) {
    if (!event.data) {
      return;
    }
    if (event.row.data.isReady) {
      event.cellElement.className += ' playerIsReadyRow';
    }
  }
}
