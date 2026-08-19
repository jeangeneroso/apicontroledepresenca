import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { Diaria } from '../../models/diaria.model'
import { catchError, Observable, of } from 'rxjs';
import { DiariasService } from '@services/diarias.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-diarias',
  standalone: true,
  imports: [
    CommonModule,
    AppMarterialModule
  ],
  templateUrl: './diarias.component.html',
  styleUrl: './diarias.component.css'
})
export class DiariasComponent {

  diarias$: Observable<Diaria[]>;

  displayedColumns: string[] = [
    'id',
    'data',
    'nomeColaborador',
    'nomeLider',
    'operacao',
    'status',
    'acoes'
  ];

  constructor(
    private diariasService: DiariasService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {

    this.diarias$ = this.diariasService.list().pipe(
      catchError(error => {
        console.error('O Java deu erro! Detalhes:', error);

        setTimeout(() => {
          this.openError('Erro ao carregar diarias da base de dados.');
        }, 0);

        return of([]);
      })
    );

  }

  ngOnInit(): void {
    
  }

  openError(errorMsg: string) {
    this.snackBar.open(errorMsg, 'Fechar', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }


  incluir() {
    this.router.navigate(['presenca']);
  }

  edit(diaria: Diaria) {
    this.router.navigate(['edit', diaria.id], { relativeTo: this.route });
  }


  refresh() {
    this.diarias$ = this.diariasService.list();
  }

    delete (diaria: Diaria): void {

      if(diaria.id && confirm('Deseja realmente excluir esta diária?')) {
      this.diariasService.excluir(Number(diaria.id)).subscribe(() => {
        this.refresh(); // Recarrega a lista reativa do Observable
      });
    }
  }
  
}

