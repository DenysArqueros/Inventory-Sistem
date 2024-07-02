import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UnidadMedidaInterface } from 'src/app/interfaces/UnidadMedida.interface';
import { UnidadmedidaService } from 'src/app/services/unidadMedida/unidadmedida.service';
import { ModalUpdateInsertMantenedorComponent } from '../modal-update-insert-mantenedor/modal-update-insert-mantenedor.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ModalEliminarConfirmComponent } from '../modal-eliminar-confirm/modal-eliminar-confirm.component';

@Component({
  selector: 'app-unidad-medida',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './unidad-medida.component.html',
  styleUrls: ['./unidad-medida.component.css']
})
export class UnidadMedidaComponent {
  constructor(private unidadMedidaService: UnidadmedidaService , public dialog: MatDialog,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  displayedColumns: string[] = ['Codigo', 'Nombre', 'Options'];
  dataSource = new MatTableDataSource<UnidadMedidaInterface>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  deleteItem(item: UnidadMedidaInterface) {
    const dialogRef = this.dialog.open(ModalEliminarConfirmComponent, {
      width: '350px',
      height : '150px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result){
        this.unidadMedidaService.deleteUnidadMedida(item.id).subscribe((data: any)=>{
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
          this.unidadMedidaService.updateUnidadMedida(result).subscribe((data:any)=>{
            this._snackBar.open(data.message,'',{
              duration: 3000
            });
            this.loadData();
          });       
        }else{
          this.unidadMedidaService.createUnidadMedida(result).subscribe((data:any)=>{
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
    this.unidadMedidaService.getUnidadMedida().subscribe((data: any) => {
      this.dataSource.data = data;
   
    });
  }


  
}
