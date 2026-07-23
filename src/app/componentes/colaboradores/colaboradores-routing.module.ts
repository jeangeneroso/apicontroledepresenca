import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './colaboradores.component';
import { ColaboradoresFormComponent } from '../../containers/colaboradores-form/colaboradores-form.component';
import { colaboradoresResolver } from '../../guards/colaboradores.resolver';

const routes: Routes = [

    { path: '', component: ColaboradoresComponent },
    { path: 'new', component: ColaboradoresFormComponent },
    { path: 'edit/:id', component: ColaboradoresFormComponent, resolve: {Colaborador: colaboradoresResolver} }  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
