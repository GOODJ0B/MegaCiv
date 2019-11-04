import {CommonModule} from '@angular/common';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {DxButtonModule} from 'devextreme-angular/ui/button';
import {DxCheckBoxModule} from 'devextreme-angular/ui/check-box';
import {DxTextBoxModule} from 'devextreme-angular/ui/text-box';
import {DxValidationGroupModule} from 'devextreme-angular/ui/validation-group';
import {DxValidatorModule} from 'devextreme-angular/ui/validator';
import {GameService} from 'src/app/shared/services/game.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  playerName = '';

  showCivilizationButtons = false;

  constructor(public readonly gameService: GameService,
              private readonly cookieService: CookieService) {
  }

  showCivilizations() {
    if (this.playerName !== '') {
      this.showCivilizationButtons = true;
    }
  }

  chooseCivilization(index: number) {
    // Als deze naam al bij een ander volk staat moet hij daar eerst weg
    for (let i = 0; i < this.gameService.game.players.length; i++) {
      if (i !== index) {
        if (this.gameService.game.players[i].playerName === this.playerName) {
          this.gameService.game.players[i].isActive = false;
          this.gameService.game.players[i].playerName = '';
        }
      }
    }
    this.cookieService.set('playerIndex', `${index}`, 1);
    this.gameService.playerIndex = index;
    this.gameService.getCurrentPlayer().isActive = index !== 0 ? true : false;
    this.gameService.getCurrentPlayer().playerName = this.playerName;

    this.gameService.sendPlayerToOtherPlayers();
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationGroupModule,
    BrowserModule
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent]
})
export class LoginFormModule { }
