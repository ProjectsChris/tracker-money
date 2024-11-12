import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/service/navbar.service';
import { accounts_db } from 'src/assets/db/accounts';
import { LinkNavbar } from 'src/enum/LinkNavbar';
import { Account } from 'src/types/Account';

@Component({
  selector: 'wp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  accounts: Account[] = accounts_db

  constructor(private _navbarService: NavbarService) {
    this._navbarService.set(LinkNavbar.Home)
  }
}
