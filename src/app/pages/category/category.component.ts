import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { loadedData } from 'src/environments/environment';
import { Category } from 'src/types/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent  implements OnInit {
  loaded: boolean = loadedData
  categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.get().subscribe(c => {
      this.categories = c
    })
  }

  createNewCategory(): void {
    console.log("New category is created")
  }
}
