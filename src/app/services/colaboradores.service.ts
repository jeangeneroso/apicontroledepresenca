import { Injectable } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private readonly API = '/assets/colaboradores.json'

  constructor(private httpClient: HttpClient) { }

  // list (): Colaborador [] {

  list() {

    /*    return [
   
         { id:'', 
           nomeColaborador:'', 
           rgColaborador:'',
           cpfColaborador:'',
           chavePix:'',
           valorDiaria:'',
           valorHoraExtra:''}
           
       ]; */

    return this.httpClient.get<Colaborador[]>(this.API)
      .pipe(
        first(),
        // delay(5000),
        tap(colaboradores => console.log(colaboradores))
      );

  }



}
