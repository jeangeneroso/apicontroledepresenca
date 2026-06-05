import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <-- ADICIONE ESTE IMPORT
import { MatTableModule } from '@angular/material/table';

import { PresencaRoutingModule } from './presenca-routing.module';
import { PresencaComponent } from './presenca.component';

@NgModule({
  declarations: [
    PresencaComponent
  ],
  imports: [
    CommonModule,
    PresencaRoutingModule,
    MatTableModule,
    ReactiveFormsModule // <-- ADICIONE AQUI TAMBÉM
  ]
})
export class PresencaModule { }