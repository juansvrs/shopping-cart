import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
parseInt(arg0: EventTarget|null) {
throw new Error('Method not implemented.');
}
  @Input() item: any;

  updateQuantity(event: Event) {
    const inputElement = event.target as HTMLInputElement; // Type assertion
    const newQuantity = parseInt(inputElement.value, 10); // Parse value as integer
    this.item.quantity = newQuantity; // Update quantity locally
  }
}
