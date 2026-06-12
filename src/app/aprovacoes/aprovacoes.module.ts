import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMarterialModule } from '../compartilhado/app-marterial/app-marterial.module';

import { AprovacoesRoutingModule } from './aprovacoes-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AprovacoesRoutingModule,
    AppMarterialModule
  ]
})
export class AprovacoesModule { }
