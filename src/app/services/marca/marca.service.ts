import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MarcaInterface } from 'src/app/interfaces/Marca.inferface';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  
  base = 'http://localhost:3000/';
  
  constructor(private httpClient: HttpClient) {}

  getMarca(): Observable<MarcaInterface> {
    return this.httpClient.get<MarcaInterface>(this.base + 'marca');
  }

  createMarca(marca: MarcaInterface): Observable<MarcaInterface> {
    return this.httpClient.post<MarcaInterface>(this.base + 'marca', marca);
  }

  updateMarca(marca: MarcaInterface): Observable<MarcaInterface> {
    return this.httpClient.put<MarcaInterface>(this.base + 'marca', marca);
  }

  deleteMarca(marca: MarcaInterface): Observable<MarcaInterface> {
    return this.httpClient.delete<MarcaInterface>(this.base + 'marca');
  }

}
