import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMarterialModule } from './app-marterial/app-marterial.module';



@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    AppMarterialModule
  ],
  exports:[
    ErrorDialogComponent
  ]
})

export class CompartilhadoModule { }
