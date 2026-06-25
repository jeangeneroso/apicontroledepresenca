import { Component } from '@angular/core';
import { Lider } from '../models/lider.model';
import { LideresService } from '../services/lideres.service';
import { CommonModule } from '@angular/common';
import { AppMarterialModule } from '../compartilhado/app-marterial/app-marterial.module';

@Component({
  selector: 'app-lideres',
  standalone: true,
  imports: [
    CommonModule,
    AppMarterialModule
  ],
  templateUrl: './lideres.component.html',
  styleUrls: ['./lideres.component.css']
})
export class LideresComponent {

  lideres: Lider[] = [];

  displayedColumns: string[] = [
    'id',
    'nomeLider',
    'rgLider',
    'cpfLider',
    'chavePix',
    'valorDiaria',
    'valorHoraExtra']

  constructor(private lideresService: LideresService) { }

  ngOnInit(): void {
    // 1. O componente carregou!
    // 2. Agora pedimos os dados para o Java
    this.carregarLideres();
  }

  carregarLideres() {
    console.log("Buscando dados no Java...");
  }


  /* Exemplo de como ficará sua chamada futuramente:
    
    this.colaboradoresService.listarTodos().subscribe({
      next: (dados) => this.colaboradores = dados,
      error: (err) => console.error("Erro ao buscar colaboradores", err)
    });
  */

}
