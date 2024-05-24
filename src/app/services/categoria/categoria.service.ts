import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaInterface } from 'src/app/interfaces/Categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  base = 'http://localhost:3000/';
  
  constructor(private httpClient: HttpClient) {}

  public getCategoria(): Observable<CategoriaInterface> {
    return this.httpClient.get<CategoriaInterface>(this.base + 'Categoria');
  }

  public createCategoria(Categoria: CategoriaInterface): Observable<CategoriaInterface> {
    return this.httpClient.post<CategoriaInterface>(this.base + 'Categoria', Categoria);
  }

  public updateCategoria(Categoria: CategoriaInterface): Observable<CategoriaInterface> {
    return this.httpClient.put<CategoriaInterface>(this.base + 'Categoria', Categoria);
  }

  public deleteCategoria(idCategoria: number): Observable<CategoriaInterface> {
    console.log(this.base + 'Categoria/' + idCategoria);
    return this.httpClient.delete<CategoriaInterface>(this.base + 'Categoria/' + idCategoria);
  }

}
