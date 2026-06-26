import { Component, OnInit } from '@angular/core';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColaboradoresService } from '@services/colaboradores.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private service: ColaboradoresService

  ) {

    this.form = this.formBuilder.group({

      nomeColaborador: [],
      rgColaborador: [],
      cpfColaborador: [],
      chavePix: []
    });

  }

  onSubmit() {
    this.service.save(this.form.value).subscribe((colaborador) => {
    console.log('Salvou com sucesso!', colaborador);
  });
  }

  onCancel() {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {

  }

}
