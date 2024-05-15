import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-modalproducto',
  standalone: true,
  imports: [MatDialogModule, FormsModule, MatInputModule, MatFormFieldModule,MatButtonModule],
  templateUrl: './modalproducto.component.html',
  styleUrls: ['./modalproducto.component.css']
})
export class ModalproductoComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalproductoComponent>,
    @Inject(MAT_DIALOG_DATA) public producto: any,
  ) {
   
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
