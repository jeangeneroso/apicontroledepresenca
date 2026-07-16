import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OperacoesService } from '@services/operacoes.service';
import { catchError, Observable, of } from 'rxjs';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { ErrorDialogComponent } from '../compartilhado/components/error-dialog/error-dialog.component';
import { Operacao } from '../models/operacao.model';

@Component({
  selector: 'app-operacoes',
  imports: [
    CommonModule,
    AppMarterialModule
  ],
  templateUrl: './operacoes.component.html',
  styleUrl: './operacoes.component.css'
})
export class OperacoesComponent {

  operacoes$: Observable<Operacao[]>;

  displayedColumns: string[] = [
    'id',
    'nomeOperacao',
    'acoes'
  ];


  constructor(
    private operacoesService: OperacoesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {

    this.operacoes$ = this.operacoesService.list().pipe(
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

  edit(operacao: any) {
    console.log('Editando a operacao:', operacao);
  }

  delete(operacao: any) {
    console.log('Excluindo a operacao:', operacao);
  }

  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  carregarOperacoes() {
    console.log("Buscando dados no Java...");
  }


}
