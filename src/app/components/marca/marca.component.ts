import { CommonModule } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MarcaInterface } from '../../interfaces/Marca.inferface';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MarcaService } from 'src/app/services/marca/marca.service';
import { ModalUpdateInsertMantenedorComponent } from '../modal-update-insert-mantenedor/modal-update-insert-mantenedor.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { ModalEliminarConfirmComponent } from '../modal-eliminar-confirm/modal-eliminar-confirm.component';

@Component({
  selector: 'app-marca',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css'],
})
export class MarcaComponent {
  constructor(private marcaService: MarcaService, public dialog: MatDialog,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  

  displayedColumns: string[] = ['Codigo', 'Nombre', 'Options'];
  dataSource = new MatTableDataSource<MarcaInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  deleteItem(item: MarcaInterface) {
    const dialogRef = this.dialog.open(ModalEliminarConfirmComponent, {
      width: '350px',
      height : '150px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if(result){
        this.marcaService.deleteMarca(item.id).subscribe((data: any)=>{
          this._snackBar.open(data.message,'',{
            duration: 3000
          });
          this.loadData();
        });
      }
    });
  }

  insertUpdate(item: any, component : string) {
    item.component = component;
    const dialogRef = this.dialog.open(ModalUpdateInsertMantenedorComponent, {
      width: '350px',
      height : '200px',
      data: {...item},
    });

    dialogRef.afterClosed().subscribe((result) => {
      delete  result?.component;
      if(result){
        if(item.id){
          this.marcaService.updateMarca(result).subscribe((data:any)=>{
            this._snackBar.open(data.message,'',{
              duration: 3000
            });
            this.loadData();
          });       
        }else{
          this.marcaService.createMarca(result).subscribe((data:any)=>{
            this._snackBar.open(data.message,'',{
              duration: 3000
            });
            this.loadData();
          });
        }
      }
    });
  }


  loadData(){
    this.marcaService.getMarca().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }
}
