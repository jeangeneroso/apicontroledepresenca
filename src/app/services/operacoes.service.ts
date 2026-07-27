import { Injectable } from '@angular/core';
import { Operacao } from '../models/operacao.model';
import { HttpClient } from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperacoesService {

  private readonly API = `${environment.apiUrl}/operacoes`;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Operacao[]>(this.API)
      .pipe(
        first(),
        tap(operacoes => console.log(operacoes))
      );
  }

  loadById(id: string | number) {
    return this.httpClient.get<Operacao>(`${this.API}/${id}`);
  }

  save(operacao: Operacao): Observable<Operacao> {
    if (operacao.id) {
      return this.update(operacao)
    }

    return this.created(operacao)
  }

  private created(operacao: Operacao) {
    return this.httpClient.post<Operacao>(this.API, operacao).pipe((first()));
  }

  private update(operacao: Operacao) {
    return this.httpClient.put<Operacao>(`${this.API}/${operacao.id}`, operacao).pipe((first()));
  }

  delete(id: string | number) {
    return this.httpClient.delete(`${this.API}/${id}`, { responseType: 'text' }).pipe((first()));
  }
}
