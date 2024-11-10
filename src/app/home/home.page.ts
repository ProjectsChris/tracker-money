import { Component } from '@angular/core';
import { single } from './data';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  single!: any[];
  legendPos: LegendPosition = LegendPosition.Right

  constructor() {
    Object.assign(this, { single })
  }
}
