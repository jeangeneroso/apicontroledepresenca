import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first, Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador.model';
import { Lider } from '../models/lider.model';

@Injectable({
  providedIn: 'root'
})
export class PresencaService {

  private readonly API = 'https://controledepresenca-lzwu.onrender.com/presencas';

  constructor(private http: HttpClient) { }

  /* salvarPresencaColaborador(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(`${this.API}/colaborador`, colaborador).pipe(first());
  }

   salvarPresencaLider(lider: Lider): Observable<Lider> {
    return this.http.post<Lider>(`${this.API}/lider`, lider).pipe(first());;
  } */

  salvarPresencaColaborador(colaborador: any): Observable<any> {
    return this.http.post<any>(`${this.API}/colaborador`, colaborador).pipe(first());
  }

  salvarPresencaLider(lider: any): Observable<any> {
    return this.http.post<any>(`${this.API}/lider`, lider).pipe(first());
  }


}