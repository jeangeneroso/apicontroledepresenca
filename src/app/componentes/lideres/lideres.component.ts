import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { Lider } from '../../models/lider.model';
import { LideresService } from '../../services/lideres.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../compartilhado/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CompartilhadoListComponent } from '../../compartilhado/compartilhado-list/compartilhado-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-lideres',
  standalone: true,
  imports: [
    CommonModule,
    AppMarterialModule,
    CompartilhadoListComponent,
  ],
  templateUrl: './lideres.component.html',
  styleUrls: ['./lideres.component.css']
})
export class LideresComponent implements OnInit {

  lideres$: Observable<Lider[]>;

  displayedColumns: string[] = [
    'id',
    'nomeLider',
    'rgLider',
    'cpfLider',
    'chavePix',
    'acoes'
  ]

  constructor(
    private lideresService: LideresService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar,
  ) {

    this.lideres$ = this.lideresService.list().pipe(
      catchError(error => {
        console.error('O Java deu erro! Detalhes:', error);

        setTimeout(() => {
          this.openError('Erro ao carregar lideres da base de dados.');
        }, 0);

        return of([]);
      })
    );
  }

  incluir() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  edit(lider: Lider) {
    this.router.navigate(['edit', lider.id], { relativeTo: this.route });
  }

  
  refresh() {
    this.lideres$ = this. lideresService.list();
  }


   delete(lider: Lider) {
  console.log('Excluindo o lider:', lider);
  
  this.lideresService.delete(lider.id!).subscribe({
    next: () => {
      this.refresh();
      this.snackBar.open('Lider excluído com sucesso!', 'Fechar', {
        duration: 2500,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    },
    error: (err) => {
      console.error('Erro ao excluir:', err);
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

  ngOnInit(): void {
  }

  carregarLideres() {
    console.log("Buscando dados no Java...");
  }
}