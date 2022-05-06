import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KonsultDashboardComponent } from './konsult-dashboard/konsult-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartsidaComponent } from './startsida/startsida.component';

@NgModule({
  declarations: [
    AppComponent,
    KonsultDashboardComponent,
    NavbarComponent,
    StartsidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
