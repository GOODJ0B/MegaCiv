import { DxButtonModule } from 'devextreme-angular/ui/button';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import { DxDataGridModule, DxFormModule, DxButtonComponent } from 'devextreme-angular';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'display-data',
    component: DisplayDataComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

const config: SocketIoConfig = { url: 'http://localhost:8889', options: {} };
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
    DxButtonModule,
    SocketIoModule.forRoot(config),
    FormsModule,
  ],
  providers: [],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, DisplayDataComponent]
})
export class AppRoutingModule { }
