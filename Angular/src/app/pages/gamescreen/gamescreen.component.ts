import {GameService} from './../../shared/services/game.service';
import {Component} from '@angular/core';
import {AdvancesService} from '../../shared/services/advances.service';
import {AdvanceNumber} from '../../shared/model/advances.enum';

@Component({
  templateUrl: 'gamescreen.component.html'
})

export class GamescreenComponent {
  dataSource: any;
  priority: any[];

  get advanceNumber() {
    return AdvanceNumber;
  }

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
