import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  // date: Date = new Date();
  
  // init data for Form
  notes = new FormControl('')
  dateForm = new FormControl('')
  
  constructor(private _modalController: ModalController) { }
  
  ngOnInit() {
    // console.log(this.date.getDate(), this.date.getMonth(), this.date.getFullYear())
  }
  
  cancel(): void {
    this._modalController.dismiss()
  }
  
  confirm(): void {
    // adds logic for add new purchase in the database
    this._modalController.dismiss()
  }
  
  selectChip(c: string): void {
    console.log(c)
  }
}
