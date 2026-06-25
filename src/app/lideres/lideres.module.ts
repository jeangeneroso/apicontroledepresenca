import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LideresRoutingModule } from './lideres-routing.module';
import { LideresComponent } from './lideres.component';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LideresRoutingModule,
    AppMarterialModule,
    LideresComponent
  ]
})
export class LideresModule { }
