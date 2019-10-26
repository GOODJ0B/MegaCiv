import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxScrollViewModule} from 'devextreme-angular/ui/scroll-view';
import {Advance} from '../../shared/model/advance.interface';
import {AdvancePopupModule} from '../advance-popup/advance-popup.component';
import {DxCheckBoxModule} from 'devextreme-angular';
import {AdvancesService} from '../../shared/services/advances.service';
import {GameService} from '../../shared/services/game.service';

@Component({
  selector: 'app-advance-card',
  templateUrl: './advance-card.component.html',
  styleUrls: ['./advance-card.component.scss']
})
export class AdvanceCardComponent {

  @Input() selectable: boolean;
  @Input() hideCost: boolean;
  @Input() advance: Advance;
  public showPopup: boolean;

  constructor(public readonly gameService: GameService,
              public readonly advancesService: AdvancesService) {
  }

  selectAdvance() {
    if (this.selectable) {
      if (this.gameService.getCurrentPlayer().selectedAdvances.includes(this.advance.id)) {
        const newSelectedAdvances = [];
        this.gameService.getCurrentPlayer().selectedAdvances.forEach(advance => {
          if (advance !== this.advance.id) {
            newSelectedAdvances.push(advance);
          }
        });
        this.gameService.getCurrentPlayer().selectedAdvances = newSelectedAdvances;
      } else {
        this.gameService.getCurrentPlayer().selectedAdvances.push(this.advance.id);
      }
      this.gameService.sendToOtherPlayers();
    }
  }
}

@NgModule({
  imports: [CommonModule, DxScrollViewModule, AdvancePopupModule, DxCheckBoxModule],
  exports: [AdvanceCardComponent],
  declarations: [AdvanceCardComponent]
})
export class AdvanceCardModule {
}
