import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { OperacoesService } from '@services/operacoes.service';

@Component({
  selector: 'app-operacoes-form',
  imports: [
    CommonModule,
    ...AppMarterialModule,
  ],
  templateUrl: './operacoes-form.component.html',
  styleUrl: './operacoes-form.component.css'
})
export class OperacoesFormComponent implements OnInit {

  form: FormGroup
  formOperacao: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: OperacoesService,
    private snackBar: MatSnackBar,
    private location: Location

  ) {

    this.form = this.formBuilder.group({

      nomeOperacao: [],

    });

  }
onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (operacao) => {
        this.onSucess();
      },
      error: (error) => this.onError()
    });
  }

  private onSucess (){
    this.snackBar.open(' Operacao cadastrada com sucesso! ' , ' Fechar ', {
      duration: 5000
    });

  }

  private onError() {
    this.snackBar.open( ' Erro ao salvar a operacao' , ' Fechar ', {
      duration: 5000
    });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  ngOnInit(): void {

  }
  }