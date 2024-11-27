import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFormComponent } from 'src/app/modal-form/modal-form.component';
import { NavbarService } from 'src/app/service/navbar.service';
import { accounts_db } from 'src/assets/db/accounts';
import { LinkNavbar } from 'src/enum/LinkNavbar';
import { loadedData } from 'src/environments/environment';
import { Account } from 'src/types/Account';

@Component({
  selector: 'wp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  accounts: Account[] = accounts_db
  loaded: boolean = loadedData

  constructor(private _navbarService: NavbarService, private _modalController: ModalController) {
    this._navbarService.set(LinkNavbar.Home)
  }
  
  async openModal(account_id: string, name_bank: string) {
    const modal = await this._modalController.create({
      component: ModalFormComponent,
      componentProps: {
        accountId: account_id,
        nameBank: name_bank
      }
    });
    modal.present();
  }
}
