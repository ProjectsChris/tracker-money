import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

@NgModule({
  declarations: [
    AppComponent, 
    SideMenuComponent, 
    HomeComponent,
    ModalFormComponent
  ], imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
