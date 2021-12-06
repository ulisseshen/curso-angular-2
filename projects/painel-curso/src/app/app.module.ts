import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsingServicesAppModule } from 'projects/using-services/src/app/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsingServicesAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
