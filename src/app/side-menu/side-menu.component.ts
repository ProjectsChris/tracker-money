import { Component } from '@angular/core';
import { LinkNavbar } from 'src/enum/LinkNavbar';
import { NavbarService } from '../service/navbar.service';

@Component({
  selector: 'wp-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  enLinkNavbar: typeof LinkNavbar = LinkNavbar
  
  urlImgProfile: string = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  userName: string = "Christopher 2024"
  loaded: boolean = true

  constructor(private _navbarService: NavbarService) {
    
  }
  
  getNameLink(): LinkNavbar | undefined {
    return this._navbarService.get()
  }
  
  setClickedLink(l: LinkNavbar): void {
    this._navbarService.set(l)
  }
}