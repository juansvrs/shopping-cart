import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) { }

  

  // METHODS USING HTTP
  getAllProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`);
  } 
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
