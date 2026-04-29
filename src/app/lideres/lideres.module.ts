import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LideresRoutingModule } from './lideres-routing.module';
import { LideresComponent } from './lideres.component';


@NgModule({
  declarations: [
    LideresComponent
  ],
  imports: [
    CommonModule,
    LideresRoutingModule
  ]
})
export class LideresModule { }
