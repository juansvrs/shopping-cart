import { provideRouter, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ShopComponent } from './components/shop/shop.component';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [
    { path: 'cart', component: CartComponent },
    { path: 'shop', component: ShopComponent },
];


export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
  };
  

