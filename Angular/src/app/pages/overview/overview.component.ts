import { GameService } from './../../shared/services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'overview.component.html'
})

export class OverviewComponent {
  dataSource: any;
  priority: any[];

  constructor(public readonly gameService: GameService) {
  }
}
