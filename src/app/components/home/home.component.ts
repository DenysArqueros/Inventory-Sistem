import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ModalproductoComponent } from '../modalproducto/modalproducto.component';

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
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatButtonModule, MatPaginatorModule, MatIconModule, MatDialogModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  displayedColumns: string[] = ['Nro', 'Nombre', 'Categoria', 'Precio', 'Costo', 'Stock', 'Options'];
  dataSource = new MatTableDataSource<Products>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(public dialog: MatDialog) { }

  openDialog(element: any, type: number): void {
    const dialogRef = this.dialog.open(ModalproductoComponent, {
      data: { ...element, type: type },
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }



}
