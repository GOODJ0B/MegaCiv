import { GameService } from './../../shared/services/game.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'admin-overview.component.html'
})

export class AdminOverviewComponent {
  dataSource: any;
  priority: any[];

  constructor(public readonly gameService: GameService) {
  }
}
