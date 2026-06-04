import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LideresRoutingModule } from './lideres-routing.module';
import { LideresComponent } from './lideres.component';
import { AppMarterialModule } from '../compartilhado/app-marterial/app-marterial.module';


@NgModule({
  declarations: [
    LideresComponent
  ],
  imports: [
    CommonModule,
    LideresRoutingModule,
    AppMarterialModule
  ]
})
export class LideresModule { }
