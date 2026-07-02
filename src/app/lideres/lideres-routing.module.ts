import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LideresComponent } from './lideres.component';
import { LideresFormComponent } from '../lideres-form/lideres-form.component'

const routes: Routes = [

  { path: '', component: LideresComponent },
  { path: 'new',component:LideresFormComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LideresRoutingModule { }
