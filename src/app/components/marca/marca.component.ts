import { CommonModule } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MarcaInterface } from '../../interfaces/Marca.inferface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { inject } from '@angular/core/testing';
import { MarcaService } from 'src/app/services/marca/marca.service';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css'],
})
export class MarcaComponent {
  constructor(private marcaService: MarcaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.marcaService.getMarca().subscribe((data: MarcaInterface) => {
      this.dataSource.data.push(data);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ELEMENT_DATA: MarcaInterface[] = [
    {
      id: 3,
      nombre: 'Jhonie Walker',
    },
  ];

  displayedColumns: string[] = ['Codigo', 'Nombre', 'Options'];
  dataSource = new MatTableDataSource<MarcaInterface>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  deleteItem(item: MarcaInterface) {
    this.marcaService.deleteMarca(item.id).subscribe();
  }
}
