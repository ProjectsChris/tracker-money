import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFormComponent } from 'src/app/modal-form/modal-form.component';
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

  constructor(private _navbarService: NavbarService, private _modalController: ModalController) {
    this._navbarService.set(LinkNavbar.Home)
  }
  
  async openModal() {
    const modal = await this._modalController.create({
      component: ModalFormComponent,
    });
    modal.present();
  }
}
