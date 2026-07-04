import { Component, inject, OnInit } from '@angular/core';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LideresService } from '@services/lideres.service';

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
    private location: Location

  ) {

    this.form = this.formBuilder.group({

      nomeLider: [],
      rgLider: [],
      cpfLider: [],
      chavePix: []
    });
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
      duration: 5000
    });
    
  }

  private onError() {
    this.snackBar.open(' Erro ao salvar o lider ', ' Fechar ', {
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
