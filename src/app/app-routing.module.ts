import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'; 
import { AboutComponent } from './components/about/about.component'; 
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full'},
  {path: 'shop', component: ShoppingCartComponent }, 
  {path: 'about', component: AboutComponent}, 
  {path: 'contact', component: ContactUsComponent}, 
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
