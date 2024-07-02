import { Component, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { VentaService } from 'src/app/services/venta/venta.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reporte-ventas',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './reporte-ventas.component.html',
  styleUrls: ['./reporte-ventas.component.css']
})
export class ReporteVentasComponent {

  constructor(private ventaService: VentaService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['Codigo', 'Fecha', 'Importe','Options'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  loadData() {
    this.ventaService.getVentas().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  verMas(idVenta : number){
    this.ventaService.getVentaById(idVenta).subscribe((data)=>{
      console.log(data);
    })
  }


}
