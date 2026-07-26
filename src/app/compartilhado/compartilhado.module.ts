import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMarterialModule } from './app-material/app-material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppMarterialModule,
    ErrorDialogComponent
  ],
  exports: [
    ErrorDialogComponent
  ]
})

export class CompartilhadoModule { }
