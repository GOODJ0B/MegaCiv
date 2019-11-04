import {LoginFormModule} from './shared/components/login-form/login-form.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SideNavInnerToolbarModule, SingleCardModule} from './layouts';
import {FooterModule} from './shared/components';
import {AppInfoService, ScreenService} from './shared/services';
import {AppRoutingModule} from './app-routing.module';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    AppRoutingModule,
    LoginFormModule,
  ],
  providers: [ScreenService, AppInfoService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
