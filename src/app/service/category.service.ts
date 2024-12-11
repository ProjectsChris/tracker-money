import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category, CategoryAPI } from 'src/types/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private uri: string = "http://localhost:8055/items/category"

  constructor(private _http: HttpClient) { }
  
  get(): Observable<Category[]> {
    return this._http.get<CategoryAPI>(this.uri).pipe(
      map((data: CategoryAPI) => data.data)
    )
  }
}
