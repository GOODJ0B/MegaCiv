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
import {Player} from '../../model/player';


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

  chooseCivilization(player: Player) {
    // Als deze naam al bij een ander volk staat moet hij daar eerst weg
    for (const playerObject of this.gameService.game.players) {
      if (playerObject.ASTRank !== player.ASTRank) {
        if (playerObject.playerName === this.playerName) {
          playerObject.isActive = false;
          playerObject.playerName = '';
        }
      }
    }
    this.cookieService.set('playerIndex', `${player.ASTRank}`, 1);
    this.gameService.playerIndex = player.ASTRank;
    player.isActive = player.ASTRank !== 0;
    player.playerName = player.ASTRank !== 0 ? this.playerName : player.playerName;

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
