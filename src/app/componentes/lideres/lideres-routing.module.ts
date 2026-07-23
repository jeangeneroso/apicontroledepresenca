import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LideresComponent } from './lideres.component';
import { LideresFormComponent } from '../../containers/lideres-form/lideres-form.component'
import { lideresResolver } from '../../guards/lideres.resolver';

const routes: Routes = [

  { path: '', component: LideresComponent },
  { path: 'new',component:LideresFormComponent},
  { path: 'edit/:id',component:LideresFormComponent, resolve: {Lider: lideresResolver}}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LideresRoutingModule { }
