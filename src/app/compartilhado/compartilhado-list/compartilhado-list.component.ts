import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from '../../models/colaborador.model'
import { AppMarterialModule } from '../app-material/app-material.module';
// Exemplo: se você estiver em 'src/app/componentes/compartilhado-list'
import { Lider } from '../../models/lider.model';

@Component({
  selector: 'app-compartilhado-list',
  imports: [CommonModule,
    AppMarterialModule],
  templateUrl: './compartilhado-list.component.html',
  styleUrl: './compartilhado-list.component.css'
})
export class CompartilhadoListComponent implements OnInit {

  @Input() colaboradores: Colaborador[] = [];

  @Input() lideres: Lider[] = [];

  get listaTabela(): (Colaborador | Lider)[] {
    return [...this.colaboradores, ...this.lideres];
  }

  @Output() inclui = new EventEmitter<boolean>();

  displayedColumns: string[] = [
    'id',
    'nomeColaborador',
    'rgColaborador',
    'cpfColaborador',
    'chavePix',
    'acoes'
  ];

  constructor() { }

  incluir() {
    this.inclui.emit(true);

  }

  edit(colaborador: any) {
    console.log('Editando o colaborador:', colaborador);
  }

  delete(colaborador: any) {
    console.log('Excluindo o colaborador:', colaborador);
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
