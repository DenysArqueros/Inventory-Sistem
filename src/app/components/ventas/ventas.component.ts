import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { map, Observable, startWith } from 'rxjs';
export interface Products {
  nombre: string;
  nro: number;
  precio: number;
  descripcion: string;
  categoria: string;
  stock: number
}

const ELEMENT_DATA: Products[] = [
  { nro: 1, nombre: 'Blue Label', precio: 1.0079, descripcion: 'H', categoria: 'Trago', stock: 12 },
  { nro: 2, nombre: 'Red Label', precio: 4.0026, descripcion: 'He', categoria: 'Trago', stock: 12 },
  { nro: 3, nombre: 'Lithium', precio: 6.941, descripcion: 'Li', categoria: 'Trago', stock: 12 },
  { nro: 4, nombre: 'Beryllium', precio: 9.0122, descripcion: 'Be', categoria: 'Trago', stock: 12 },
  { nro: 5, nombre: 'Boron', precio: 10.811, descripcion: 'B', categoria: 'Trago', stock: 12 },
  { nro: 6, nombre: 'Carbon', precio: 12.0107, descripcion: 'C', categoria: 'Trago', stock: 12 },
  { nro: 7, nombre: 'Nitrogen', precio: 14.0067, descripcion: 'N', categoria: 'Trago', stock: 12 },
  { nro: 8, nombre: 'Oxygen', precio: 15.9994, descripcion: 'O', categoria: 'Trago', stock: 12 },
  { nro: 9, nombre: 'Fluorine', precio: 18.9984, descripcion: 'F', categoria: 'Trago', stock: 12 },
  { nro: 10, nombre: 'Neon', precio: 20.1797, descripcion: 'Ne', categoria: 'Trago', stock: 12 },
  { nro: 11, nombre: 'Hydrogen', precio: 1.0079, descripcion: 'H', categoria: 'Trago', stock: 12 },
  { nro: 12, nombre: 'Helium', precio: 4.0026, descripcion: 'He', categoria: 'Trago', stock: 12 },
  { nro: 13, nombre: 'Lithium', precio: 6.941, descripcion: 'Li', categoria: 'Trago', stock: 12 },
  { nro: 14, nombre: 'Beryllium', precio: 9.0122, descripcion: 'Be', categoria: 'Trago', stock: 12 },
  { nro: 15, nombre: 'Boron', precio: 10.811, descripcion: 'B', categoria: 'Trago', stock: 12 },
  { nro: 16, nombre: 'Carbon', precio: 12.0107, descripcion: 'C', categoria: 'Trago', stock: 12 },
  { nro: 17, nombre: 'Nitrogen', precio: 14.0067, descripcion: 'N', categoria: 'Trago', stock: 12 },
  { nro: 18, nombre: 'Oxygen', precio: 15.9994, descripcion: 'O', categoria: 'Trago', stock: 12 },
  { nro: 19, nombre: 'Fluorine', precio: 18.9984, descripcion: 'F', categoria: 'Trago', stock: 12 },
  { nro: 20, nombre: 'Neon', precio: 20.1797, descripcion: 'Ne', categoria: 'Trago', stock: 12 },
  { nro: 21, nombre: 'Hydrogen', precio: 1.0079, descripcion: 'H', categoria: 'Trago', stock: 12 },
  { nro: 22, nombre: 'Helium', precio: 4.0026, descripcion: 'He', categoria: 'Trago', stock: 12 },
  { nro: 23, nombre: 'Lithium', precio: 6.941, descripcion: 'Li', categoria: 'Trago', stock: 12 },
  { nro: 24, nombre: 'Beryllium', precio: 9.0122, descripcion: 'Be', categoria: 'Trago', stock: 12 },
  { nro: 25, nombre: 'Boron', precio: 10.811, descripcion: 'B', categoria: 'Trago', stock: 12 },
  { nro: 26, nombre: 'Carbon', precio: 12.0107, descripcion: 'C', categoria: 'Trago', stock: 12 },
  { nro: 27, nombre: 'Nitrogen', precio: 14.0067, descripcion: 'N', categoria: 'Trago', stock: 12 },
  { nro: 28, nombre: 'Oxygen', precio: 15.9994, descripcion: 'O', categoria: 'Trago', stock: 12 },
  { nro: 29, nombre: 'Fluorine', precio: 18.9984, descripcion: 'F', categoria: 'Trago', stock: 12 },
  { nro: 30, nombre: 'Neon', precio: 20.1797, descripcion: 'Ne', categoria: 'Trago', stock: 12 },
];
@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [MatAutocompleteModule,MatFormFieldModule,ReactiveFormsModule,CommonModule,MatInputModule,MatButtonModule
  ,MatTableModule,MatIconModule],
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  myControl = new FormControl('');
  options: string[] = ['Red label', 'Blue label', 'Gold label'];
  filteredOptions!: Observable<string[]>;
  dataSource = ELEMENT_DATA
  displayedColumns: string[] = ['Nro', 'Nombre', 'Categoria', 'Precio', 'Costo', 'Stock', 'Options'];


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  removeItem(element: any) {
    this.dataSource = this.dataSource.filter(x=> x.nro!== element.nro);
   
    
  }

}
