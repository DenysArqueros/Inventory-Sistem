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

  public getMarca(): Observable<MarcaInterface> {
    return this.httpClient.get<MarcaInterface>(this.base + 'marca');
  }

  public createMarca(marca: MarcaInterface): Observable<MarcaInterface> {
    return this.httpClient.post<MarcaInterface>(this.base + 'marca', marca);
  }

  public pdateMarca(marca: MarcaInterface): Observable<MarcaInterface> {
    return this.httpClient.put<MarcaInterface>(this.base + 'marca', marca);
  }

  public deleteMarca(idmarca: number): Observable<MarcaInterface> {
    console.log(this.base + 'marca/' + idmarca);
    return this.httpClient.delete<MarcaInterface>(this.base + 'marca/' + idmarca);
  }

}
