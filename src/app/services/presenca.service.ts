import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Colaborador } from '../models/colaborador.model';
import { Lider } from '../models/lider.model';
import { Operacao } from '../models/operacao.model';

@Injectable({
  providedIn: 'root'
})
export class PresencaService {

  private readonly API = `${environment.apiUrl}/presencas`;

  constructor(private http: HttpClient) { }

  /* salvarPresencaColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(`${this.API}/colaborador`, colaborador).pipe(first());
  }

   salvarPresencaLider(lider: Lider): Observable<Lider> {
    return this.http.post<Lider>(`${this.API}/lider`, lider).pipe(first());;
  } */

  salvarPresencaColaborador(colaborador: any): Observable<any> {
    return this.http.post<any>(`${this.API}/presencas/colaborador`, colaborador).pipe(first());
  }

  salvarPresencaLider(lider: any): Observable<any> {
    return this.http.post<any>(`${this.API}/presencas/lider`, lider).pipe(first());
  }

  /*  buscarLideres() {
   return this.http.get<Lider[]>(this.API)
         .pipe(
           first(),
           tap((lideres: any) => console.log(lideres))
         );
 }
 buscarOperacoes() {
    return this.http.get<Operacao[]>(this.API)
         .pipe(
           first(),
           tap(operacoes => console.log(operacoes))
         );
 }
 buscarColaboradores() {
  return this.http.get<Colaborador[]>(this.API)
         .pipe(
           first(),
           tap(colaboradores => console.log(colaboradores))
         );
 } */

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

}