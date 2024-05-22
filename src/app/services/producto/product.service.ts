import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoInterface } from 'src/app/interfaces/Producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  base = 'http://localhost:3000/';
  
  constructor(private httpClient: HttpClient) {}

  getProducto(): Observable<ProductoInterface> {
    return this.httpClient.get<ProductoInterface>(this.base + 'producto');
  }

  createProducto(marca: ProductoInterface): Observable<ProductoInterface> {
    return this.httpClient.post<ProductoInterface>(this.base + 'producto', marca);
  }

  updateProducto(marca: ProductoInterface): Observable<ProductoInterface> {
    return this.httpClient.put<ProductoInterface>(this.base + 'producto', marca);
  }

  deleteProducto(marca: ProductoInterface): Observable<ProductoInterface> {
    return this.httpClient.delete<ProductoInterface>(this.base + 'producto');
  }
}
