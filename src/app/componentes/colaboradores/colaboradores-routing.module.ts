import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradoresComponent } from './colaboradores.component';
import { ColaboradoresFormComponent } from '../../containers/colaboradores-form/colaboradores-form.component';

const routes: Routes = [

    { path: '', component: ColaboradoresComponent },
    { path: 'new', component: ColaboradoresFormComponent }  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradoresRoutingModule { }
