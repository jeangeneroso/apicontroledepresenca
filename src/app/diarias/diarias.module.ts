import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiariasRoutingModule } from './diarias-routing.module';
import { DiariasComponent } from './diarias.component';


@NgModule({
  declarations: [
    DiariasComponent
  ],
  imports: [
    CommonModule,
    DiariasRoutingModule
  ]
})
export class DiariasModule { }
