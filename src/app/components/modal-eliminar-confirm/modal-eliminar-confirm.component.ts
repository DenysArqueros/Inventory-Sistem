import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-modal-eliminar-confirm',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  templateUrl: './modal-eliminar-confirm.component.html',
  styleUrls: ['./modal-eliminar-confirm.component.css'],
})
export class ModalEliminarConfirmComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalEliminarConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  
  onNoClick(){
    this.dialogRef.close();
  }

}
