import {GameService} from './shared/services/game.service';
import {Component, HostBinding, OnInit} from '@angular/core';
import {AppInfoService, ScreenService} from './shared/services';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(
    private screen: ScreenService,
    public appInfo: AppInfoService,
    public readonly gameService: GameService,
    private readonly cookieService: CookieService) {
  }

  ngOnInit(): void {
    const cookieExists = this.cookieService.check('playerIndex');
    if (cookieExists) {
      const cookie = +this.cookieService.get('playerIndex');
      console.log('++++++++++++ cookie read: ', cookie);
      this.gameService.playerIndex = cookie;
    }
  }

  isAutorized(): boolean {
    return this.gameService.playerIndex > -1;
  }

}
