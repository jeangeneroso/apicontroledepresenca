import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppMarterialModule } from "../../compartilhado/app-material/app-material.module";


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [RouterModule, AppMarterialModule]
  // NÃO pode ter a linha "standalone: true" aqui!
  // NÃO pode ter a linha "imports: [...]" aqui!
})
export class LayoutComponent implements OnInit  {

  constructor(private router: Router) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  deslogar() {
    this.router.navigate(['/login']);
  }
}
