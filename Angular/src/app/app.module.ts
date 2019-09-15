import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule } from './shared/components';
import { ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    AppRoutingModule,
  ],
  providers: [ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
