import { Injectable } from '@angular/core';
import { Lider } from '../models/lider.model';

@Injectable({
  providedIn: 'root'
})

export class LideresService {

  constructor() { }

  list(): Lider[] {

    return [
        {id:'',
        nomeLider:'',
        rgLider:'',
        cpfLider:'',
        chavePix:'',
        valorDiaria:'',
        valorHoraExtra:''}


    ];

  }
}
