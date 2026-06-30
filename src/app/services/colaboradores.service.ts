import { Injectable } from '@angular/core';
import { Colaborador } from '../models/colaborador.model';
import { HttpClient } from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  private readonly API = '/api/colaboradores'

  constructor(private httpClient: HttpClient) { }

  // list (): Colaborador [] {

  list() {

    return this.httpClient.get<Colaborador[]>(this.API)
      .pipe(
        first(),
        tap(colaboradores => console.log(colaboradores))
      );

  }

  save(colaborador: Colaborador) : Observable<Colaborador>{
   return this.httpClient.post<Colaborador>(this.API, colaborador);
  }



}
