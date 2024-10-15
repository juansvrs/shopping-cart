import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
    console.log(this.cartItems)
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  purchase() {
    console.log(`items in car: ${this.cartItems}`)
    const total = this.calculateTotal();
    console.log(`Total purchase amount: $${total}`);
  }

  updateQuantity(newQuantity: number, item: any) {
    item.quantity = newQuantity;
  
    // Update the cart in the CartService (which will also update localStorage)
    const updatedItems = this.cartItems.map(cartItem => 
      cartItem.id === item.id ? item : cartItem
    );
    this.cartService.updateCart(updatedItems);
  }

}
