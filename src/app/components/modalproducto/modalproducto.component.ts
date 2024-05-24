import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { MarcaService } from 'src/app/services/marca/marca.service';
import { UnidadmedidaService } from 'src/app/services/unidadMedida/unidadmedida.service';

@Component({
  selector: 'app-modalproducto',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSelectModule, CommonModule],
  templateUrl: './modalproducto.component.html',
  styleUrls: ['./modalproducto.component.css']
})
export class ModalproductoComponent {
  foods: any;
  categoriaList : any;
  marcaList: any;
  unidadMedidaList :any; 

  constructor(
    public dialogRef: MatDialogRef<ModalproductoComponent>,
    @Inject(MAT_DIALOG_DATA) public producto: any,
    private marcaService: MarcaService,
    private unidadMedidaService: UnidadmedidaService,
    private categoriaService: CategoriaService
  ) {
  }

  ngOnInit(): void {
    this.categoriaService.getCategoria().subscribe((data:any)=>{
      this.categoriaList = data;
    });

    this.marcaService.getMarca().subscribe((data:any)=>{
      this.marcaList = data;
    });

    this.unidadMedidaService.getUnidadMedida().subscribe((data:any)=>{
      this.unidadMedidaList = data;
    });    
  }



  onNoClick(): void {
    this.dialogRef.close();
  }
}
