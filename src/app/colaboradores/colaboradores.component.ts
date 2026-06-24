import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { ColaboradoresService } from '../services/colaboradores.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../compartilhado/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {

  incluir() {
    throw new Error('Method not implemented.');
  }
  edit(colaborador: any) {
    console.log('Editando o colaborador:', colaborador);
  }

  delete(colaborador: any) {
    console.log('Excluindo o colaborador:', colaborador);
  }

 /*   delete(colaborador: any) {
      console.log('Excluindo o colaborador:', colaborador);
  } */

  colaboradores$: Observable<Colaborador[]>;

  displayedColumns: string[] = [
    'id',
    'nomeColaborador',
    'rgColaborador',
    'cpfColaborador',
    'chavePix',
    'acoes'
  ];

  // Injetando os serviços corretamente no construtor
  constructor(
    private colaboradoresService: ColaboradoresService,
    public dialog: MatDialog
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

  // Método corrigido para abrir o diálogo correto
  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }

  /*  ngOnInit(): void {
     // FORCE ESTE TESTE:
     setTimeout(() => {
       this.openError('O sistema de módulos funcionou perfeitamente!');
     }, 1000);
   }
  */
  carregarColaboradores() {
    console.log("Buscando dados no Java...");
  }
}