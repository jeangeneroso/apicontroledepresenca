import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <-- ADICIONE ESTE IMPORT
import { MatTableModule } from '@angular/material/table';
import { PresencaRoutingModule } from './presencas-routing.module';
import { PresencaComponent } from './presencas.component';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PresencaRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    PresencaComponent,
    AppMarterialModule
  ]
})
export class PresencaModule { }