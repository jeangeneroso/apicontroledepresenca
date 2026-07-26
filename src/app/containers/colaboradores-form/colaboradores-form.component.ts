import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColaboradoresService } from '@services/colaboradores.service';
import { AppMarterialModule } from '../../compartilhado/app-material/app-material.module';
import { ActivatedRoute } from '@angular/router';
import { Colaborador } from '../../models/colaborador.model';

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
  formColaborador: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ColaboradoresService,
    private snackBar: MatSnackBar,
    private location: Location,
    private router: ActivatedRoute

  ) {

    this.form = this.formBuilder.group({

      id: [''],
      nomeColaborador: ['',
        [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(75)]],
      rgColaborador: ['', [Validators.required]],
      cpfColaborador: ['', [Validators.required]],
      chavePix: ['',
        [Validators.required,
        Validators.minLength(7),
        Validators.maxLength(30)]]
    });

  }

  ngOnInit(): void {
    const colaborador: Colaborador = this.router.snapshot.data['colaborador'];
    if (colaborador) {
      this.form.setValue({
        id: colaborador.id,
        nomeColaborador: colaborador.nomeColaborador,
        rgColaborador: colaborador.rgColaborador,
        cpfColaborador: colaborador.cpfColaborador,
        chavePix: colaborador.chavePix,
      })

    }

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (colaborador) => {
        this.onSucess();
      },
      error: (error) => this.onError()
    });
  }

  private onSucess() {
    this.snackBar.open(' Colaborador cadastrado com sucesso! ', ' Fechar ', {
      duration: 2500
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open(' Erro ao salvar o colaborador ', ' Fechar ', {
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