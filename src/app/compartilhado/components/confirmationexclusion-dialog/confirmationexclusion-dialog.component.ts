import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppMarterialModule } from '../../app-material/app-material.module';

@Component({
  selector: 'app-confirmationexclusion-dialog',
   standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    AppMarterialModule],
  templateUrl: './confirmationexclusion-dialog.component.html',
  styleUrl: './confirmationexclusion-dialog.component.css'
})
export class ConfirmationexclusionDialogComponent {

      
  constructor (
    
    public dialogRef: MatDialogRef<ConfirmationexclusionDialogComponent>,
    
    @Inject(MAT_DIALOG_DATA) public data: string){
    

  }

  ngOnInit(): void {
  }

  onConfirm(boolean: any): void {
    this.dialogRef.close(boolean);
  }

}
