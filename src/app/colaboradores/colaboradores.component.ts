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
    public dialog: MatDialog
  ) {
    this.colaboradores$ = this.colaboradoresService.list().pipe(
      catchError(error => {
        console.error('O Java deu erro! Detalhes:', error);
        
        // O setTimeout joga a abertura do dialog para o próximo ciclo de renderização,
        // evitando que o Angular trave a abertura do modal.
        setTimeout(() => {
          this.openError('Erro ao carregar colaboradores da base de dados.');
        }, 0);

        return of([]); // Retorna lista vazia para sumir com o Spinner de carregamento
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
    // FORCE ESTE TESTE:
    setTimeout(() => {
      this.openError('O sistema de módulos funcionou perfeitamente!');
    }, 1000);
  }

  carregarColaboradores() {
    console.log("Buscando dados no Java...");
  }
}