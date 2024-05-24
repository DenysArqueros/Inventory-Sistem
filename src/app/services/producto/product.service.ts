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

  createProducto(producto: ProductoInterface): Observable<ProductoInterface> {
    return this.httpClient.post<ProductoInterface>(this.base + 'producto', producto);
  }

  updateProducto(producto: ProductoInterface): Observable<ProductoInterface> {
    return this.httpClient.put<ProductoInterface>(this.base + 'producto', producto);
  }

  deleteProducto(idProducto: number): Observable<ProductoInterface> {
    return this.httpClient.delete<ProductoInterface>(this.base + 'producto/' + idProducto);
  }
}
