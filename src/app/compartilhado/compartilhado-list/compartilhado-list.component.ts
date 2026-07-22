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

  /*  @Output() edita = new EventEmitter<Colaborador>(); */

  @Output() edita = new EventEmitter<any>();

  /* @Output() deleta = new EventEmitter<Colaborador>(); */

  @Output() deleta = new EventEmitter<any>();


  displayedColumns: string[] = [
    'id',
    'nomeColaborador',
    'rgColaborador',
    'cpfColaborador',
    'chavePix',
    'acoes'
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  incluir() {
    this.inclui.emit(true);

  }

  /* editar(colaborador: Colaborador) {
    this.edita.emit(colaborador);

  } */

  editar(item: any) {
    this.edita.emit(item);
  }

  /*  delete(colaborador: Colaborador) {
     this.deleta.emit(colaborador);
   } */

  delete(item: any) {
    this.deleta.emit(item);
  }

  ngOnInit(): void {

  }

}
