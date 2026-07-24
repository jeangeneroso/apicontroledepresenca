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

  list() {

    return this.httpClient.get<Colaborador[]>(this.API)
      .pipe(
        first(),
        tap(colaboradores => console.log(colaboradores))
      );

  }

  loadById(id: string | number) {
    return this.httpClient.get<Colaborador>(`${this.API}/${id}`);
  }

  save(colaborador: Colaborador): Observable<Colaborador> {
    if (colaborador.id) {
      return this.update(colaborador);
    }

    return this.created(colaborador);
  }

  private created(colaborador: Colaborador) {
    return this.httpClient.post<Colaborador>(this.API, colaborador).pipe((first()));
  }

  private update(colaborador: Colaborador) {
    return this.httpClient.put<Colaborador>(`${this.API}/${colaborador.id}`, colaborador).pipe((first()));
  }

  delete(id: string | number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe((first()));
  }


}
