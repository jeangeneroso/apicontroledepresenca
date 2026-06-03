import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { ColaboradoresService } from '../services/colaboradores.service';

@Component({
  selector: 'app-colaboradores', // <-- Corrigido aqui (adicionado 'selector')
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  // A tabela do Material Design precisa dessas variáveis
  colaboradores: Colaborador[] = [];
  
  // Dica: Remova os espaços em branco de dentro das strings do array abaixo 
  // para bater certinho com as propriedades do seu modelo/colunas do HTML
  displayedColumns: string[] =  [
    
    'id',
    'nomeColaborador',
    'rgColaborador',
    'cpfColaborador',
    'chavePix',
    'valorDiaria',
    'valorHoraExtra'];

  // Injetando o serviço no construtor para poder usar na chamada do Java
  constructor(private colaboradoresService: ColaboradoresService) {}

  ngOnInit(): void {
    // 1. O componente carregou!
    // 2. Agora pedimos os dados para o Java
    this.carregarColaboradores();
  }

  carregarColaboradores() {
    console.log("Buscando dados no Java...");
    
    /* Exemplo de como ficará sua chamada futuramente:
      
      this.colaboradoresService.listarTodos().subscribe({
        next: (dados) => this.colaboradores = dados,
        error: (err) => console.error("Erro ao buscar colaboradores", err)
      });
    */
  }
}