import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoggingService } from './logging.service';
import { AccountsService } from './accounts.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class UsingServicesAppModule { }
