import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { GameService } from 'src/app/shared/services/game.service';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent {

  constructor(public readonly gameService: GameService) { }

  playerIsReady(): void {
    this.gameService.playerIsReady();
  }

  playerIsNotReady(): void {
    this.gameService.getCurrentPlayer().isReady = false;
    this.gameService.sendToOtherPlayers();
  }

  editPhase(difference: number): void {
    this.gameService.game.phase += difference;
  }

  test() {
    this.gameService.getCurrentPlayer().hasMilitary = true;
  }
}

@NgModule({
  imports: [DxButtonModule, BrowserModule],
  declarations: [FooterComponent],
  exports: [FooterComponent]
})
export class FooterModule {
}
