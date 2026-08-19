import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiariasComponent } from './diarias.component';

const routes: Routes = [

  { path: '', component: DiariasComponent }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiariasRoutingModule { }
