import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CategoryService } from '../service/category.service';
import { Category } from 'src/types/Category';

@Component({
  selector: 'wp-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss'],
})
export class ModalFormComponent  implements OnInit {
  categories: Category[] = []
  accountId: string = ""
  nameBank: string = ""
  
  // init data for Form
  purchaseForm = new FormGroup({
    price: new FormControl('', Validators.required),
    notes: new FormControl('', Validators.required),
  })
  
  constructor(private _modalController: ModalController, private categoryService: CategoryService) { }
  
  ngOnInit() {
    this.categoryService.get().subscribe(c => {
      this.categories = c
    })
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
