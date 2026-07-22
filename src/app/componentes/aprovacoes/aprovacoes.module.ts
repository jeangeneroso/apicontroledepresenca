import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
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
