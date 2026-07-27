import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

    private readonly API = `${environment.apiUrl}/extras`;
    
    constructor(private http: HttpClient) { }

    salvarHoraExtraColaborador(colaborador: any): Observable<any> {
       return this.http.post<any>(`${this.API}/colaborador`, colaborador).pipe(first());
  }

   salvarHoraExtraLider(lider: any): Observable<any> {
       return this.http.post<any>(`${this.API}/lider`, lider).pipe(first());
  }

}
