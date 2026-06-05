import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // <-- ISSO É CRUCIAL para o Angular saber injetar o service
})
export class PresencaService { // <-- O nome aqui deve ser EXATAMENTE este

  private readonly API_URL = 'http://localhost:8080/api/presencas';

  constructor(private http: HttpClient) { }

  salvarPresencaColaborador(dadosColaborador: any): Observable<any> {
    return this.http.post(`${this.API_URL}/colaborador`, dadosColaborador);
  }

  salvarPresencaLider(dadosLider: any): Observable<any> {
    return this.http.post(`${this.API_URL}/lider`, dadosLider);
  }
}