import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppMarterialModule } from '../../app-material/app-material.module';

@Component({
  selector: 'app-confirmationincluid-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    AppMarterialModule],
  templateUrl: './confirmationincluid-dialog.component.html',
  styleUrl: './confirmationincluid-dialog.component.css'
})
export class ConfirmationincluidDialogComponent {

       
  constructor (
    
    public dialogRef: MatDialogRef<ConfirmationincluidDialogComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: string){
    

  }

  ngOnInit(): void {
  }

  onConfirm(boolean: any): void {
    this.dialogRef.close(boolean);

}
