import { Component } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';


@Component({
  templateUrl: 'actions.component.html',
  styleUrls: ['./actions.component.scss']
})

export class ActionsComponent {

  constructor(public readonly gameService: GameService) { }

}
