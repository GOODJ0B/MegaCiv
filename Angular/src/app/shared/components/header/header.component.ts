import { Component, NgModule, Input, Output, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';
import { Page } from 'src/app/pages/page';
import { GameService } from '../../services/game.service';

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
    text: 'Profile',
    icon: 'user'
  }, {
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
