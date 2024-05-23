import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UnidadMedidaInterface } from "../../interfaces/UnidadMedida.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadmedidaService {

  base = 'http://localhost:3000/';
  
  constructor(private httpClient: HttpClient) {}

  getUnidadMedida(): Observable<UnidadMedidaInterface> {
    return this.httpClient.get<UnidadMedidaInterface>(this.base + 'UnidadMedida');
  }

  createUnidadMedida(UnidadMedida: UnidadMedidaInterface): Observable<UnidadMedidaInterface> {
    return this.httpClient.post<UnidadMedidaInterface>(this.base + 'UnidadMedida', UnidadMedida);
  }

  updateUnidadMedida(UnidadMedida: UnidadMedidaInterface): Observable<UnidadMedidaInterface> {
    return this.httpClient.put<UnidadMedidaInterface>(this.base + 'UnidadMedida', UnidadMedida);
  }

  deleteUnidadMedida(idUnidadMedida: number): Observable<UnidadMedidaInterface> {
    return this.httpClient.delete<UnidadMedidaInterface>(this.base + 'UnidadMedida/' + idUnidadMedida);
  }
}
