import { Component } from '@angular/core';
import { NavbarService } from 'src/app/service/navbar.service';
import { LinkNavbar } from 'src/enum/LinkNavbar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  
  constructor(private _navbarService: NavbarService) {
    this._navbarService.set(LinkNavbar.Accounts);
  }
}
