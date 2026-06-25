import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppMarterialModule } from '../../app-marterial/app-marterial.module';

@Component({
  selector: 'app-error-dialog',
    standalone: true,
  imports: [
    CommonModule,
    AppMarterialModule
  ],
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit{

  constructor (@Inject(MAT_DIALOG_DATA) public data: string){

  }

  ngOnInit(): void {
  }



}
