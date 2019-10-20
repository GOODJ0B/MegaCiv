import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule, DxFormModule, DxNumberBoxModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { AdvanceCardModule } from './layouts/advance-card/advance-card.component';
import { ActionsComponent } from './pages/actions/actions.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdvancesComponent } from './pages/advances/advances.component';
import { GamescreenComponent } from './pages/gamescreen/gamescreen.component';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './pages/overview/overview.component';

const routes: Routes = [
  {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'actions',
    component: ActionsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gamescreen',
    component: GamescreenComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'advances',
    component: AdvancesComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

const config: SocketIoConfig = {url: 'http://jantineislief.nl:8889', options: {}};

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    CommonModule,
    DxNumberBoxModule,
    AdvanceCardModule
  ],
  providers: [],
  exports: [
    RouterModule
  ],
  declarations: [
    HomeComponent,
    ActionsComponent,
    OverviewComponent,
    AdminComponent,
    GamescreenComponent,
    AdvancesComponent,
  ]
})
export class AppRoutingModule {
}
