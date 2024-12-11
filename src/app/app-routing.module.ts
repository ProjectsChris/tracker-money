import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './pages/account/account.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
