import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductCardComponent,HttpClientModule,CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
}) 
export class ShopComponent implements OnInit{

  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
    console.log("productos fetched "+ this.products)
  }

  fetchProducts(): void {
    this.productsService.getAllProducts().subscribe((response: any) => {
      this.products = response.products; // Assuming response has a 'products' property
    });
  }
}
