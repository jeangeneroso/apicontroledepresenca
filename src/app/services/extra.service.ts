import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

    private readonly API = 'https://controledepresenca-lzwu.onrender.com/api/extras';

    constructor(private http: HttpClient) { }

    salvarHoraExtraColaborador(colaborador: any): Observable<any> {
       return this.http.post<any>(`${this.API}/colaborador`, colaborador).pipe(first());
  }

   salvarHoraExtraLider(lider: any): Observable<any> {
       return this.http.post<any>(`${this.API}/lider`, lider).pipe(first());
  }

}
