import {Component} from '@angular/core';
import {GameService} from 'src/app/shared/services/game.service';
import {AdvancesService} from '../../shared/services/advances.service';

@Component({
  templateUrl: 'advances.component.html',
  styleUrls: ['./advances.component.scss']
})

export class AdvancesComponent {


  constructor(public readonly gameService: GameService,
              public readonly advancesService: AdvancesService) {
  }


}
