import { DxButtonModule } from 'devextreme-angular/ui/button';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { DxDataGridModule, DxFormModule, DxButtonComponent } from 'devextreme-angular';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';
import { ActionsComponent } from './pages/actions/actions.component';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './pages/admin/admin.component';

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
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

const config: SocketIoConfig = { url: 'http://jantineislief.nl:8889', options: {} };
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    SocketIoModule.forRoot(config),
    FormsModule,
    CommonModule
  ],
  providers: [],
  exports: [RouterModule],
  declarations: [HomeComponent, ActionsComponent, OverviewComponent, AdminComponent]
})
export class AppRoutingModule { }
