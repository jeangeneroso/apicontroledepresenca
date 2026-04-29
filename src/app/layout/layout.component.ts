import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
  // NÃO pode ter a linha "standalone: true" aqui!
  // NÃO pode ter a linha "imports: [...]" aqui!
})
export class LayoutComponent {
  deslogar() {
    console.log('Usuário saiu');
  }
}
