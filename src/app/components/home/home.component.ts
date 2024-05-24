import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { ModalproductoComponent } from '../modalproducto/modalproducto.component';
import { ProductService } from 'src/app/services/producto/product.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductoInterface } from 'src/app/interfaces/Producto.interface';
import { ModalEliminarConfirmComponent } from '../modal-eliminar-confirm/modal-eliminar-confirm.component';

export interface Products {
  nombre: string;
  nro: number;
  precio: number;
  descripcion: string;
  categoria: string;
  stock: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  displayedColumns: string[] = [
    'Nro',
    'Nombre',
    'Marca',
    'Categoria',
    'UnidadMedida',
    'Costo',
    'Precio',
    'Stock',
    'Options',
  ];
  dataSource = new MatTableDataSource<Products>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.loadData()
  }

  constructor(
    public dialog: MatDialog,
    private productoService: ProductService,
    private _snackBar: MatSnackBar
  ) {}

  openDialog(item: any): void {
    const dialogRef = this.dialog.open(ModalproductoComponent, {
      width: '800px',
      height: '450px',
      data: { ...item},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if(item?.id){
          this.productoService.updateProducto(result).subscribe((data: any) => {
            this._snackBar.open(data.message, '', {
              duration: 3000,
            });
            this.loadData();
          });    
        }else{
          this.productoService.createProducto(result).subscribe((data: any) => {
            this._snackBar.open(data.message, '', {
              duration: 3000,
            });
            this.loadData();
          });
        }
       
      }
    });
  }

  loadData() {
    this.productoService.getProducto().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  deleteItem(item: ProductoInterface){
    const dialogRef = this.dialog.open(ModalEliminarConfirmComponent, {
      width: '350px',
      height : '150px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if(result){
        this.productoService.deleteProducto(item.id).subscribe((data: any)=>{
          this._snackBar.open(data.message,'',{
            duration: 3000
          });
          this.loadData();
        });
      }
    });
  }
}
