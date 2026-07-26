import { Component, inject, OnInit } from '@angular/core';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LideresService } from '@services/lideres.service';
import { ActivatedRoute } from '@angular/router';
import { Lider } from '../../models/lider.model';

@Component({
  selector: 'app-lideres-form',
  imports: [
    CommonModule,
    ...AppMarterialModule,

  ],
  templateUrl: './lideres-form.component.html',
  styleUrl: './lideres-form.component.css'
})
export class LideresFormComponent implements OnInit {

  form: FormGroup
  formLider: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: LideresService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute

  ) {

    this.form = this.formBuilder.group({

      id: [''],
      nomeLider: [
        [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(75)]],
      rgLider: [['', [Validators.required]],],
      cpfLider: [['', [Validators.required]],],
      chavePix: [['', [Validators.required]],]
    });
  }

  ngOnInit(): void {
    const lider: Lider = this.router.snapshot.data['lider'];
    if (lider) {
      this.form.setValue({
        id: lider.id,
        nomeLider: lider.nomeLider,
        rgLider: lider.rgLider,
        cpfLider: lider.cpfLider,
        chavePix: lider.chavePix,

      })
    }

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (lider) => {
        this.onSucess();
      },
      error: (error) => this.onError()
    });
  }

  private onSucess() {
    this.snackBar.open(' Lider cadastrado com sucesso! ', ' Fechar ', {
      duration: 2500
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open(' Erro ao salvar o lider ', ' Fechar ', {
      duration: 2500
    });
    this.onCancel();
  }

  onCancel() {
    this.location.back();
  }

  getErrorMessage(string: any) {
    const field = this.form.get(string);

    if (field?.hasError('required')) {
      return 'Campo Obrigatario';
    }

    if (field?.hasError('minLength')) {
      const requiredLength: number = field.errors ? field.errors['minLength']['requiredLength'] : 3;
      return ` Tamanho minimo dos caracteres precisa ser $ {requiredLength} caracteres`;
    }

    if (field?.hasError('maxLength')) {
      const requiredLength: number = field.errors ? field.errors['maxLength']['requiredLength'] : 3;
      return ` Tamanho maximo dos caracteres precisa ser $ {requiredLength} caracteres`;
    }

    return 'Campo invalido';

  }

}
