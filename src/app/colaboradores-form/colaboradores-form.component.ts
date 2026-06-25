import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colaboradores-form',
  standalone: true,
  imports: [
    CommonModule,
    AppMarterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './colaboradores-form.component.html',
  styleUrl: './colaboradores-form.component.css'
})
export class ColaboradoresFormComponent {

}
