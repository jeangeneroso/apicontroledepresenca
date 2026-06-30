import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LideresRoutingModule } from './lideres-routing.module';
import { LideresComponent } from './lideres.component';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { CompartilhadoModule } from '../compartilhado/compartilhado.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
  ],

  imports: [
    CommonModule,
    LideresRoutingModule,
    AppMarterialModule,
    MatDialogModule,
    CompartilhadoModule,
    LideresComponent
  ]
})

export class LideresModule { }
