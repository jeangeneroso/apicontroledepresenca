import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresComponent } from './colaboradores.component';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MatDialogModule } from '@angular/material/dialog';
import { CompartilhadoListComponent } from '../compartilhado/compartilhado-list/compartilhado-list.component';


@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    AppMarterialModule,
    MatDialogModule,
    CompartilhadoModule,
    ColaboradoresComponent,
    CompartilhadoListComponent,

  ]
})

export class ColaboradoresModule { }
