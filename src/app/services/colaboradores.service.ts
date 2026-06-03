import { Injectable } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor() { }

  list (): Colaborador [] {

    return [

      { id:'', 
        nomeColaborador:'', 
        rgColaborador:'',
        cpfColaborador:'',
        chavePix:'',
        valorDiaria:'',
        valorHoraExtra:''}
        
    ];

  }



}
