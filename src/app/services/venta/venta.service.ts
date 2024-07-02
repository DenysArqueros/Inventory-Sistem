import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  
  base = 'http://localhost:3000/';
  
  constructor(private httpClient: HttpClient) {}

  getVentas(): Observable<any> {
    return this.httpClient.get<any>(this.base + 'venta');
  }

  createVenta(listVenta: any): Observable<any> {
    return this.httpClient.post<any>(this.base + 'venta', listVenta);
  }

  getVentaById(idVenta: number) : Observable<any>{
    return this.httpClient.get<any>(this.base+ 'venta/' + idVenta)
  }


}
