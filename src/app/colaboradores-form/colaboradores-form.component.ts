import { Component, inject, OnInit } from '@angular/core';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColaboradoresService } from '@services/colaboradores.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-colaboradores-form',
  standalone: true,
  imports: [
    CommonModule,
    ...AppMarterialModule,

  ],
  templateUrl: './colaboradores-form.component.html',
  styleUrl: './colaboradores-form.component.css'
})
export class ColaboradoresFormComponent implements OnInit {

  form: FormGroup
  formLider: any;

  /*  private formBuilder = inject(FormBuilder);
   private service = inject(ColaboradoresService);
   private snackBar = inject(MatSnackBar); */

  constructor(
    private formBuilder: FormBuilder,
    private service: ColaboradoresService,
    private snackBar: MatSnackBar

  ) {

    this.form = this.formBuilder.group({

      nomeColaborador: [],
      rgColaborador: [],
      cpfColaborador: [],
      chavePix: []
    });

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (colaborador) => {
        console.log('Salvou com sucesso!', colaborador);
      },
      error: (error) => this.onError()
    });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o colaborador', 'Fechar', {
      duration: 5000
    });
  }

  onCancel() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

}