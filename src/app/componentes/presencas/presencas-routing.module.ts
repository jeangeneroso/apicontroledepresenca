import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresencaComponent } from './presencas.component';

const routes: Routes = [
  {path: '', component : PresencaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresencaRoutingModule { }
