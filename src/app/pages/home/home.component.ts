import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  accounts: string[] = ["Santander", "Poste Italiane", "Banca di Credito Cooperativo", "Libretto Postale", "Portafoglio Investimento"]

  constructor() { }

  ngOnInit() {}

}
