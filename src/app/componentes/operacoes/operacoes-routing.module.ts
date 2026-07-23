import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperacoesComponent } from './operacoes.component';
import { OperacoesFormComponent } from '../../containers/operacoes-form/operacoes-form.component';
import { operacoesResolver } from '../../guards/operacoes.resolver';


const routes: Routes = [

  { path: '', component: OperacoesComponent },
  { path: 'new', component: OperacoesFormComponent },
  { path: 'edit/:id', component: OperacoesFormComponent, resolve: {Operacao:operacoesResolver}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperacoesRoutingModule { }
