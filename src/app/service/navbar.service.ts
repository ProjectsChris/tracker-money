import { Injectable } from '@angular/core';
import { LinkNavbar } from 'src/enum/LinkNavbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  private actualLink: LinkNavbar | undefined

  constructor() {
  }
  
  get(): LinkNavbar | undefined {
    return this.actualLink
  }
  
  set(l: LinkNavbar) {
    this.actualLink = l
  }
}
