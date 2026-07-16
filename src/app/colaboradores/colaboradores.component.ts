import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module'; 
import { Colaborador } from '../models/colaborador.model';
import { ColaboradoresService } from '../services/colaboradores.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../compartilhado/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CompartilhadoListComponent } from '../compartilhado/compartilhado-list/compartilhado-list.component';


@Component({
  selector: 'app-colaboradores',
  standalone: true,
  imports: [
    CommonModule,
    AppMarterialModule,
    CompartilhadoListComponent,
  ],
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  colaboradores$: Observable<Colaborador[]>;

  displayedColumns: string[] = [
    'id',
    'nomeColaborador',
    'rgColaborador',
    'cpfColaborador',
    'chavePix',
    'acoes'
  ];

  constructor(
    private colaboradoresService: ColaboradoresService,
    public  dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {

    this.colaboradores$ = this.colaboradoresService.list().pipe(
      catchError(error => {
        console.error('O Java deu erro! Detalhes:', error);

        setTimeout(() => {
          this.openError('Erro ao carregar colaboradores da base de dados.');
        }, 0);

        return of([]);
      })
    );
  }

  incluir() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  edit(colaborador: any) {
    console.log('Editando o colaborador:', colaborador);
  }

  delete(colaborador: any) {
    console.log('Excluindo o colaborador:', colaborador);
  }

  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  carregarColaboradores() {
    console.log("Buscando dados no Java...");
  }
}