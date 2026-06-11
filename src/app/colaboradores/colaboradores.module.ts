import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresComponent } from './colaboradores.component';
import { AppMarterialModule } from '../compartilhado/app-marterial/app-marterial.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';


@NgModule({
  declarations: [
    ColaboradoresComponent
  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    AppMarterialModule,
    CompartilhadoModule

  ]
})
export class ColaboradoresModule { }
