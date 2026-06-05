import { Injectable } from '@angular/core';
import { Lider } from '../models/lider.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LideresService {

  constructor( private httpCient:HttpClient ) { }

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
