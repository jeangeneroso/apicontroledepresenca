import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AppMarterialModule } from "../compartilhado/app-marterial/app-marterial.module";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterModule, AppMarterialModule]
  // NÃO pode ter a linha "standalone: true" aqui!
  // NÃO pode ter a linha "imports: [...]" aqui!
})
export class LayoutComponent {
  deslogar() {
    console.log('Usuário saiu');
  }
}
