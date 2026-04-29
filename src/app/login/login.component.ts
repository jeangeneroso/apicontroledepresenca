import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Importe o Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // 2. Injete o Router no construtor
  constructor(private router: Router) {}

  // 3. Crie a função que o botão do HTML vai chamar
  entrar() {
    // Aqui no futuro você validará se a senha está certa.
    // Por enquanto, vamos apenas simular que deu certo:
    console.log('Login realizado com sucesso!');

    // 4. Navega para a rota 'presenca'
    // Como definimos no AppRoutingModule, o Angular vai carregar 
    // o LayoutComponent automaticamente porque 'presenca' é filho dele.
    this.router.navigate(['/presenca']);
  }
}