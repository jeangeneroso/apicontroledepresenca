import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Lider } from '../models/lider.model';
import { Operacao } from '../models/operacao.model';
import { Colaborador } from '../models/colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  private readonly API = `${environment.apiUrl}/extras`;

  constructor(private http: HttpClient) { }

  buscarLideres() {
    return this.http.get<Lider[]>(`${environment.apiUrl}/lideres`).pipe(
      first(),
      tap(lideres => console.log('Líderes:', lideres))
    );
  }

  buscarOperacoes() {
    return this.http.get<Operacao[]>(`${environment.apiUrl}/operacoes`).pipe(
      first(),
      tap(operacoes => console.log('Operações:', operacoes))
    );
  }

  buscarColaboradores() {
    return this.http.get<Colaborador[]>(`${environment.apiUrl}/colaboradores`).pipe(
      first(),
      tap(colaboradores => console.log('Colaboradores:', colaboradores))
    );
  }

  salvarHoraExtraColaborador(colaborador: any): Observable<any> {
    return this.http.post<any>(`${this.API}/colaborador`, colaborador).pipe(first());
  }

  salvarHoraExtraLider(lider: any): Observable<any> {
    return this.http.post<any>(`${this.API}/lider`, lider).pipe(first());
  }

}
