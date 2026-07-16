import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { OperacoesService } from '@services/operacoes.service';

@Component({
  selector: 'app-operacoes-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...AppMarterialModule,
  ],
  templateUrl: './operacoes-form.component.html',
  styleUrl: './operacoes-form.component.css'
})
export class OperacoesFormComponent implements OnInit {

   form = this.formBuilder.group({

      nomeOperacao: [''],

    });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: OperacoesService,
    private snackBar: MatSnackBar,
    private location: Location

  ) { 

  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    this.service.save(this.form.getRawValue()).subscribe({
      next: () => {
        this.onSucess();
      },
      error: () => this.onError()
    });
  }

  private onSucess(): void {
    this.snackBar.open(' Operacao cadastrada com sucesso! ', ' Fechar ', {
      duration: 2500
    });
    this.onCancel();
  }

  private onError(): void {
    this.snackBar.open(' Erro ao salvar a operacao', ' Fechar ', {
      duration: 2500
    });
    this.onCancel();
  }

  onCancel(): void {
    this.location.back();
  }
}

