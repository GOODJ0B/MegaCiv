import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from 'src/app/shared/services/game.service';
import { Game } from 'src/app/shared/model/game.interface';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  game: Game;

  private _connection: Subscription;

  constructor(public readonly gameService: GameService) { }

  ngOnInit() {
    this._connection = this.gameService.game.pipe(
      startWith({ id: '', doc: 'Select an existing document or create a new one to get started'})
    ).subscribe(game => this.game = game as Game);
  }

  ngOnDestroy() {
    this._connection.unsubscribe();
  }


  changeTestValue() {
    this.game.id += 'hoi';
    this.gameService.updateGame(this.game);
  }
}
