import { Injectable } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor() { }

  list (): Colaborador [] {

    return [

      { id:'1', 
        nomeColaborador:'2', 
        rgColaborador:'2',
        cpfColaborador:'2',
        chavePix:'4',
        valorDiariaBase:'5',
        valorHoraExtraBase:'6'}
        
    ];

  }



}
