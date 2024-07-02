import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';
import { ProductService } from 'src/app/services/producto/product.service';
import { VentaService } from 'src/app/services/venta/venta.service';

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

const ELEMENT_DATA: ProductVenta[] = [
  {
    nombre: 'Red Label',
    nro: 1,
    precioUnitario: 50.0,
    descripcion: 'Whisky Red Label',
    categoria: 'Licores',
    stock: 1,
    precioTotal: 100,
    unidades: 2,
  },
];
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
  precio = new FormControl('',);

  productoListTemp: any = [];
  productoTemp: any = {};

  filteredOptions!: Observable<any>;
  dataSource = new MatTableDataSource<any>([]);

  displayedColumns: string[] = [
    'Nro',
    'Nombre',
    'Categoria',
    'PrecioUnitario',
    'PrecioTotal',
    'Unidades',
    'Options',
  ];

  productOptions: any = [];

  constructor(private productoService: ProductService,private ventaService: VentaService) { }

  ngOnInit() {
    this.loadData();
  }

  private _filter(value: any): string[] {
    const filterValue = value.toLowerCase();
    return this.productOptions.filter((option: any) =>
      option.nombre.toLowerCase().includes(filterValue)
    );
  }

  removeItem(id: any) {
    this.productoListTemp = this.productoListTemp.filter((x: any) => {
      return x.id != id;
    })
    this.dataSource.data = this.productoListTemp;
  }

  agregarProducto() {
    this.productoTemp.unidades = this.cantidad.getRawValue();
    this.productoTemp.subtotal = Number(this.productoTemp.precio) * Number(this.cantidad.getRawValue());
    this.productoListTemp.push(this.productoTemp);
    this.dataSource.data = this.productoListTemp;
  }

  loadData() {
    this.productoService.getProducto().subscribe((data: any) => {
      this.productOptions = data;

      this.filteredOptions = this.producto.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value || ''))
      );
    });
  }

  clickProducto(producto: any) {
    this.precio.setValue(producto.precio);
    this.productoTemp = { ...producto }
  }


  realizarVenta(){
    this.ventaService.createVenta(this.productoListTemp).subscribe();
  }


}
