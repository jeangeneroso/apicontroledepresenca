import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColaboradoresService } from '@services/colaboradores.service';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';

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

  /*  private formBuilder = inject(FormBuilder);
   private service = inject(ColaboradoresService);
   private snackBar = inject(MatSnackBar); */

  constructor(
    private formBuilder: FormBuilder,
    private service: ColaboradoresService,
    private snackBar: MatSnackBar,
    private location: Location

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
        this.onSucess();
      },
      error: (error) => this.onError()
    });
  }

  private onSucess (){
    this.snackBar.open(' Colaborador cadastrado com sucesso! ' , ' Fechar ', {
      duration: 5000
    });

  }

  private onError() {
    this.snackBar.open( ' Erro ao salvar o colaborador ' , ' Fechar ', {
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