import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxScrollViewModule} from 'devextreme-angular/ui/scroll-view';
import {Advance} from '../../shared/model/advance.interface';
import {DxButtonModule, DxPopupModule} from 'devextreme-angular';
import {AdvancesService} from '../../shared/services/advances.service';

@Component({
  selector: 'app-advance-popup',
  templateUrl: './advance-popup.component.html',
  styleUrls: ['./advance-popup.component.scss']
})
export class AdvancePopupComponent {
  @Input() hideCost: boolean;
  @Input() advance: Advance;
  private _visible: boolean;
  @Input() set visible(value: boolean) {
    this._visible = value;
    this.visibleChange.emit(value);
  }

  get visible(): boolean {
    return this._visible;
  }

  @Output() visibleChange = new EventEmitter<boolean>();

  constructor(public readonly advancesService: AdvancesService) {
  }


}

@NgModule({
  imports: [CommonModule, DxScrollViewModule, DxPopupModule, DxButtonModule],
  exports: [AdvancePopupComponent],
  declarations: [AdvancePopupComponent]
})
export class AdvancePopupModule {
}
