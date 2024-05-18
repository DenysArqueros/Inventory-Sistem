import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';

import { map, Observable, startWith } from 'rxjs';
export interface ProductVenta {
  nombre: string;
  nro: number;
  descripcion: string;
  categoria: string;
  stock: number;
  precioUnitario: number;
  precioTotal: number;
  unidades: number;
}

const ELEMENT_DATA: ProductVenta[] = [{
  nombre: 'Red Label',
  nro: 1,
  precioUnitario: 50.0,
  descripcion: 'Whisky Red Label',
  categoria: 'Licores',
  stock: 1,
  precioTotal: 100,
  unidades: 2,
}];
@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
  ],
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css'],
})
export class VentasComponent {
  producto = new FormControl('');
  cantidad = new FormControl('');
  precio = new FormControl('');

  options: string[] = ['Red label', 'Blue label', 'Gold label'];
  filteredOptions!: Observable<string[]>;
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'Nro',
    'Nombre',
    'Categoria',
    'PrecioUnitario',
    'PrecioTotal',
    'Unidades',
    'Options',
  ];

  ngOnInit() {
    this.filteredOptions = this.producto.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  removeItem(element: any) {
    this.dataSource = this.dataSource.filter((x) => x.nro !== element.nro);
  }

  agregarProducto() {
    this.dataSource.push({
      nombre: 'Red Label',
      nro: 1,
      precioUnitario: 50.0,
      descripcion: 'Whisky Red Label',
      categoria: 'Licores',
      stock: 1,
      precioTotal: 100,
      unidades: 2,
    });
  }
}
