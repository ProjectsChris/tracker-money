import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Account, AccountAPI } from 'src/types/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private uri: string = "http://localhost:8055/items/account"

  constructor(private _http: HttpClient) {
  }
  
  get(): Observable<Account[]> {
    return this._http.get<AccountAPI>(this.uri).pipe(
      map((data: AccountAPI) => data.data)
    )
  }
}
