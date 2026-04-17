import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'presenca'},

  {
    path: 'presenca',
    loadChildren: () => import('./presenca/presenca.module').then(mod => mod.PresencaModule),
  }
];
{

}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
