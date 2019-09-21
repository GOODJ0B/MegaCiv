import { GameService } from './shared/services/game.service';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ScreenService, AppInfoService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(
    private screen: ScreenService,
    public appInfo: AppInfoService,
    public readonly gameService: GameService) { }

  isAutorized(): boolean {
    return this.gameService.playerIndex > -1;
  }

}
