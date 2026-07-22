import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // <-- ADICIONE ESTE IMPORT
import { MatTableModule } from '@angular/material/table';

import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { ExtraRoutingModule } from './extra-routing.module';
import { ExtraComponent } from './extra.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExtraRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    ExtraComponent,
    AppMarterialModule
  ]
})
export class ExtraModule { }
