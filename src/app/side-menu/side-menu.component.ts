import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {
  urlImgProfile: string = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  userName: string = "Christopher 2024"

  constructor() { }

  ngOnInit() {}

}
