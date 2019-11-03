import {GameService} from 'src/app/shared/services/game.service';
import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DxListModule} from 'devextreme-angular/ui/list';
import {DxContextMenuModule} from 'devextreme-angular/ui/context-menu';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
  @Input()
  menuItems: any;

  @Input()
  menuMode: string;

  constructor(public readonly gameService: GameService,
              private readonly cookieService: CookieService) {
  }


  logout() {
    this.gameService.playerIndex = undefined;
    this.cookieService.delete('playerIndex');
    console.log('++++++++++++ Logged out!');
  }
}

@NgModule({
  imports: [
    DxListModule,
    DxContextMenuModule,
    CommonModule
  ],
  declarations: [UserPanelComponent],
  exports: [UserPanelComponent]
})
export class UserPanelModule {
}
