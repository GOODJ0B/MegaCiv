import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserPanelModule} from '../user-panel/user-panel.component';
import {DxButtonModule} from 'devextreme-angular/ui/button';
import {DxToolbarModule} from 'devextreme-angular/ui/toolbar';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  userMenuItems = [{
    text: 'Logout',
    icon: 'runner',
  }];

  constructor(public readonly gameService: GameService) {
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    UserPanelModule,
    DxToolbarModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
