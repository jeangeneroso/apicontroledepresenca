import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppMarterialModule } from '../compartilhado/app-material/app-material.module';

@Component({
  selector: 'app-diarias',
  standalone: true,
  imports: [
    CommonModule,  
    AppMarterialModule 
  ],
  templateUrl: './diarias.component.html',
})
export class DiariasComponent {

}
