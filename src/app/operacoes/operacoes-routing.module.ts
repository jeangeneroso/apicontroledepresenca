import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacoesComponent } from './operacoes.component';
import { OperacoesFormComponent } from '../operacoes-form/operacoes-form.component';

const routes: Routes = [

  { path: '', component: OperacoesComponent },
  { path: 'new', component: OperacoesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacoesRoutingModule { }
