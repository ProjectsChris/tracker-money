import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalFormComponent } from 'src/app/modal-form/modal-form.component';
import { AccountService } from 'src/app/service/account.service';
import { NavbarService } from 'src/app/service/navbar.service';
import { LinkNavbar } from 'src/enum/LinkNavbar';
import { loadedData } from 'src/environments/environment';
import { Account } from 'src/types/Account';

@Component({
  selector: 'wp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  loaded: boolean = loadedData
  accounts: Account[] = [];

  constructor(private _navbarService: NavbarService, private _modalController: ModalController, private accountService: AccountService) {
    this._navbarService.set(LinkNavbar.Home)
    
    this.accountService.get().subscribe(data => {
      this.accounts = data
    })
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
