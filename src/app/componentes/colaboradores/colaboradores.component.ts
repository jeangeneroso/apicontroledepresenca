import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module'; 
import { Colaborador } from '../../models/colaborador.model';
import { ColaboradoresService } from '../../services/colaboradores.service';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../compartilhado/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CompartilhadoListComponent } from '../../compartilhado/compartilhado-list/compartilhado-list.component';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  constructor(
    private colaboradoresService: ColaboradoresService,
    public  dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar,
  
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

  ngOnInit(): void {
  }

  incluir() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  
  edit(colaborador: Colaborador) {
     this.router.navigate(['edit', colaborador.id], { relativeTo: this.route });
  }

  refresh() {
    this.colaboradores$ = this.colaboradoresService.list();
  }

  delete(colaborador: Colaborador) {
  console.log('Excluindo o colaborador:', colaborador);
  
  this.colaboradoresService.delete(colaborador.id!).subscribe({
    next: () => {
      this.refresh();
      this.snackBar.open('Colaborador excluído com sucesso!', 'Fechar', {
        duration: 2500,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });
    },
    error: (err) => {
      console.error('Erro ao excluir:', err);
      this.snackBar.open('Erro ao excluir colaborador.', 'Fechar', {
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

  carregarColaboradores() {
    console.log("Buscando dados no Java...");
  }
}