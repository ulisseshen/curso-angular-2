import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { Account } from './models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: Account[] = []

  constructor(private accountService:AccountsService){}

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
}
