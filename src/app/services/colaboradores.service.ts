import { Injectable } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor( private httpClient: HttpClient) { }

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
