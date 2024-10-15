import { Component, Input } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any; // Accept product as an input

  constructor(private cartService:CartServiceService){}

  buyProduct() {
    console.log(`Adding product to cart: ${this.product.title}`);
    this.cartService.addToCart(this.product)

  }
}
