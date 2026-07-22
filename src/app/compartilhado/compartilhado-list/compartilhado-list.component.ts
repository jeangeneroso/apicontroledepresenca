import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/models/colaborador.model'
import { AppMarterialModule } from '../app-material/app-material.module';
import { Lider } from 'src/app/models/lider.model';

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
    private route: ActivatedRoute,
  ) { }

  incluir() {
    this.router.navigate(['new'], { relativeTo: this.route });
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
