
import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})

export class ColaboradoresComponent implements OnInit {

  colaboradores: Colaborador [] = [];

  displayedColumns: string[] = [
  'id', 
  'nomeColaborador', 
  'rgColaborador', 
  'cpfColaborador', 
  'chavePix', 
  'valorDiariaBase', 
  'valorHoraExtraBase'
];

  constructor () {}

  ngOnInit(): void {
    /* throw new Error('Method not implemented.'); */
  }

}


/* @Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html'
})
export class ColaboradoresComponent implements OnInit {

  // A tabela do Material Design precisa dessas variáveis
  displayedColumns: string[] = ['id', 'nomeColaborador', 'valorDiaria', 'rodizio'];
  dataSource: Colaborador[] = [];

  constructor() {
    // Aqui você só avisa quais serviços vai usar
  }

  ngOnInit(): void {
    // 1. O componente carregou!
    // 2. Agora pedimos os dados para o Java
    this.carregarColaboradores();
  }

  carregarColaboradores() {
    // Aqui entrará a chamada para o seu Service futuramente
    console.log("Buscando dados no Java...");
  }
} */