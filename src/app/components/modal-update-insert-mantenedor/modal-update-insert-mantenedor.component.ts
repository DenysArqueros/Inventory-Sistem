import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-modal-update-insert-mantenedor',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule
  ],
  templateUrl: './modal-update-insert-mantenedor.component.html',
  styleUrls: ['./modal-update-insert-mantenedor.component.css'],
})
export class ModalUpdateInsertMantenedorComponent implements OnInit {
  title = '';
  constructor(
    public dialogRef: MatDialogRef<ModalUpdateInsertMantenedorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {

    this.title = this.data?.id ? 'Actualizar ': 'Insertar ';
    this.title += this.data.component;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
