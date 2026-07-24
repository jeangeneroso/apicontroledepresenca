import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OperacoesService } from '@services/operacoes.service';
import { catchError, Observable, of } from 'rxjs';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { ErrorDialogComponent } from '../../compartilhado/components/error-dialog/error-dialog.component';
import { Operacao } from '../../models/operacao.model';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private location: Location,
    private snackBar: MatSnackBar,
  ) {

    this.operacoes$ = this.operacoesService.list().pipe(
      catchError(error => {
        console.error('O Java deu erro! Detalhes:', error);

        setTimeout(() => {
          this.openError('Erro ao carregar operacoes da base de dados.');
        }, 0);

        return of([]);
      })
    );

  }

  ngOnInit(): void {
  }

  incluir() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  edit(operacao: Operacao) {
    this.router.navigate(['edit', operacao.id], { relativeTo: this.route });
  }


  refresh() {
    this.operacoes$ = this.operacoesService.list();
  }

  delete(operacao: Operacao) {
    console.log('Excluindo o operacao:', operacao);

    this.operacoesService.delete(operacao.id!).subscribe({
      next: () => {
        this.refresh();
        this.snackBar.open('Operacao excluído com sucesso!', 'Fechar', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      },
      error: (err) => {
        console.error('Erro ao Operação excluir:', err);
        this.snackBar.open('Erro ao excluir.', 'Fechar', {
          duration: 2500,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      }
    });
  }

  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  carregarOperacoes() {
    console.log("Buscando dados no Java...");
  }


}
