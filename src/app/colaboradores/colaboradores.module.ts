import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresComponent } from './colaboradores.component';
import { AppMarterialModule } from '../compartilhado/app-marterial/app-marterial.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    AppMarterialModule,
    MatDialogModule,
    CompartilhadoModule,
    ColaboradoresComponent

  ]
})
export class ColaboradoresModule { }
