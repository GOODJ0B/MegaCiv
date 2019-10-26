import {Component, Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxScrollViewModule} from 'devextreme-angular/ui/scroll-view';
import {Advance} from '../../shared/model/advance.interface';
import {AdvancePopupModule} from '../advance-popup/advance-popup.component';

@Component({
  selector: 'app-advance-card',
  templateUrl: './advance-card.component.html',
  styleUrls: ['./advance-card.component.scss']
})
export class AdvanceCardComponent {

  @Input() hideCost: boolean;
  @Input() advance: Advance;
  public showPopup: boolean;

  constructor() {
  }

  openPopup() {
    this.showPopup = true;
  }
}

@NgModule({
  imports: [CommonModule, DxScrollViewModule, AdvancePopupModule],
  exports: [AdvanceCardComponent],
  declarations: [AdvanceCardComponent]
})
export class AdvanceCardModule {
}
