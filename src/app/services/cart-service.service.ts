import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  updateCart(updatedItems: any[]) {
    throw new Error('Method not implemented.');
  }

  private cartItems = new BehaviorSubject<any[]>(this.getCartFromLocalStorage());
  cartItems$ = this.cartItems.asObservable();
  constructor() { }

  addToCart(product: any) {
    const currentItems = this.cartItems.getValue();
    const updatedItems = [...currentItems, { ...product, quantity: 1 }];
    this.cartItems.next(updatedItems);
    this.saveCartToLocalStorage(updatedItems); // Save to localStorage
  }
  saveCartToLocalStorage(updatedItems: any[]) {
    localStorage.setItem('shoppingCart', JSON.stringify(updatedItems));
  }

   getCartFromLocalStorage(): any[] {
    const storedCart = localStorage.getItem('shoppingCart');
    return storedCart ? JSON.parse(storedCart) : [];
  }

    clearCart() {
    localStorage.removeItem('shoppingCart');
  }
  
}




