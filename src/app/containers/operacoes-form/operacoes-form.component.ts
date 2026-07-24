import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { OperacoesService } from '@services/operacoes.service';
import { ActivatedRoute } from '@angular/router';
import { Operacao } from '../../models/operacao.model';

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
    id: [''],
    nomeOperacao: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private service: OperacoesService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute

  ) { }

  ngOnInit(): void {
    const operacao: Operacao = this.router.snapshot.data['operacao'];
    if (operacao) {
      this.form.setValue({
        id: String(operacao.id ?? ''), // Converte o ID para string para o TypeScript não reclamar
        nomeOperacao: operacao.nomeOperacao,
      });
    }
  }

 onSubmit(): void {
  this.service.save(this.form.getRawValue() as Operacao).subscribe({
    next: (operacao) => {
      this.onSucess();
    },
    error: (error) => this.onError()
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