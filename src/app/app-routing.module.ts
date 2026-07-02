import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  // 1. ROTA INICIAL: Quando abrir o site, redireciona direto para o login
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  // 2. ROTA DE LOGIN: Tela cheia, sem menu, sem toolbar
  { path: 'login', component: LoginComponent },

  // 3. ROTAS PROTEGIDAS: Só entram aqui se estiverem logados
  {
    path: '',
    component: LayoutComponent, // Este componente tem a Toolbar e o Menu Lateral
    children: [
      { 
        path: 'presenca', 
        loadChildren: () => import('./presencas/presencas.module').then(m => m.PresencaModule) 
      },
      { 
        path: 'colaboradores', 
        loadChildren: () => import('./colaboradores/colaboradores.module').then(m => m.ColaboradoresModule) 
      },
      { 
        path: 'lideres', 
        loadChildren: () => import('./lideres/lideres.module').then(m => m.LideresModule) 
      },
      { 
        path: 'aprovacoes', 
        loadChildren: () => import('./aprovacoes/aprovacoes.module').then(m => m.AprovacoesModule) 
      },
       { 
        path: 'diarias', 
        loadChildren: () => import('./diarias/diarias.module').then(m => m.DiariasModule) 
      },
      { 
        path: 'relatorios', 
        loadChildren: () => import('./relatorios/relatorios.module').then(m => m.RelatorioModule) 
      }
    ]
  },

  // 4. ROTA CORINGA: Se o usuário digitar bobagem na URL, volta pro login
  { path: '**', redirectTo: 'login' }
];
{

}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
