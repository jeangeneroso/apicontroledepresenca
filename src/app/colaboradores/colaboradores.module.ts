import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { ColaboradoresRoutingModule } from './colaboradores-routing.module';
import { ColaboradoresComponent } from './colaboradores.component';


@NgModule({
  declarations: [
    ColaboradoresComponent
  ],
  imports: [
    CommonModule,
    ColaboradoresRoutingModule,
    MatTableModule
  ]
})
export class ColaboradoresModule { }
