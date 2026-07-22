import { Injectable } from '@angular/core';
import { Operacao } from '../models/operacao.model';
import { HttpClient } from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperacoesService {

  private readonly API = '/api/operacoes'

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Operacao[]>(this.API)
      .pipe(
        first(),
        tap(operacoes => console.log(operacoes))
      );
  }

   loadById(id: string){
      return this.httpClient.get<Operacao>('${this.API/${id}');
    }

    save(operacao: Operacao) : Observable<Operacao>{
         return this.httpClient.post<Operacao>(this.API, operacao).pipe((first()));
  }

}
