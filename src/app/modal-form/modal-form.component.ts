import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'wp-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent  implements OnInit {
  categories: string[] = ['Home', 'Shopping', 'Health', 'Hobby']
  accountId: string = ""
  nameBank: string = ""
  
  // init data for Form
  purchaseForm = new FormGroup({
    price: new FormControl('', Validators.required),
    notes: new FormControl('', Validators.required),
  })
  
  constructor(private _modalController: ModalController) { }
  
  ngOnInit() {
    // console.log(this.date.getDate(), this.date.getMonth(), this.date.getFullYear())
  }
  
  cancel(): void {
    this._modalController.dismiss()
  }
  
  confirm(): void {
    // adds logic for add new purchase in the database
    // this._modalController.dismiss()
  }
  
  selectChip(c: string): void {
    console.log(c)
  }
  
  submitPurchase() {
    console.log("submit")
    console.log(this.purchaseForm.value)
    this._modalController.dismiss()
  }
}
