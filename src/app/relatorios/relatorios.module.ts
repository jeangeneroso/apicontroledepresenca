import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { RelatorioRoutingModule } from './relatorios-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RelatorioRoutingModule,
    MatTableModule
  ]
})
export class RelatorioModule { }
