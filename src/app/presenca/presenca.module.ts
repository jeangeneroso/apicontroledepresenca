import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresencaRoutingModule } from './presenca-routing.module';
import { PresencaComponent } from './presenca/presenca.component';


@NgModule({
  declarations: [
    PresencaComponent
  ],
  imports: [
    CommonModule,
    PresencaRoutingModule
  ]
})
export class PresencaModule { }
