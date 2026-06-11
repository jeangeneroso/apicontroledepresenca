import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { ColaboradoresService } from '../services/colaboradores.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
// Seu componente de diálogo real importado aqui:
import { ErrorDialogComponent } from '../compartilhado/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-colaboradores',
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
    'valorDiaria',
    'valorHoraExtra'
  ];

  // Injetando os serviços corretamente no construtor
  constructor(
    private colaboradoresService: ColaboradoresService,
    public dialog: MatDialog // <-- Mudado de 'data' para 'dialog'
  ) {
    this.colaboradores$ = this.colaboradoresService.list().pipe(
      catchError(error => {
        // Quando der erro, chama a função para abrir o modal passando a mensagem
        this.openError('Erro ao carregar colaboradores da base de dados.');
        return of([]);
      })
    );
  }

  // Método corrigido para abrir o diálogo correto
  openError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, { // <-- Usando o componente correto aqui
      data: errorMsg // <-- Passando a mensagem de erro que veio do catchError
    });
  }

  ngOnInit(): void {
    // Caso queira usar a função do Java futuramente:
    // this.carregarColaboradores();
  }

  carregarColaboradores() {
    console.log("Buscando dados no Java...");
  }
}