import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UnidadMedidaInterface } from 'src/app/interfaces/UnidadMedida.interface';
import { UnidadmedidaService } from 'src/app/services/unidadMedida/unidadmedida.service';

@Component({
  selector: 'app-unidad-medida',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent {
  constructor(private unidadMedida: UnidadmedidaService) {

  }

  ngOnInit(): void {
    this.unidadMedida.getUnidadMedida().subscribe((data: UnidadMedidaInterface) => {
      this.dataSource.data.push(data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ELEMENT_DATA: UnidadMedidaInterface[] = [
    {
      id: 3,
      nombre: 'Jhonie Walker',
    },
  ];

  displayedColumns: string[] = ['Codigo', 'Nombre', 'Options'];
  dataSource = new MatTableDataSource<UnidadMedidaInterface>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  deleteItem(item: UnidadMedidaInterface) {
    this.unidadMedida.deleteUnidadMedida(item.id).subscribe();
  }



}
