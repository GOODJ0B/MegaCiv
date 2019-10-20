import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DxScrollViewModule} from 'devextreme-angular/ui/scroll-view';
import {Advance} from '../../shared/model/advance.interface';
import {DxButtonModule, DxPopupModule} from 'devextreme-angular';
import {advancesList} from '../../shared/model/advances-list';
import {AdvancesService} from '../../shared/services/advances.service';
import {AdvanceTypes} from '../../shared/model/advance-types.enum';

@Component({
  selector: 'app-advance-popup',
  templateUrl: './advance-popup.component.html',
  styleUrls: ['./advance-popup.component.scss']
})
export class AdvancePopupComponent {

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

  buyAdvance() {
    this.advancesService.buyAdvance(this.advance);
    this.visible = false;
  }
}

@NgModule({
  imports: [CommonModule, DxScrollViewModule, DxPopupModule, DxButtonModule],
  exports: [AdvancePopupComponent],
  declarations: [AdvancePopupComponent]
})
export class AdvancePopupModule {
}
