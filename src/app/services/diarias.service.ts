import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Diaria } from '../models/diaria.model';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DiariasService {

  private readonly API = `${environment.apiUrl}/diarias`;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Diaria[]>(this.API)
      .pipe(
        first(),
        tap(diarias => console.log(diarias))
      );
  }

 /*  loadById(id: string | number) {
    return this.httpClient.get<Diaria>(`${this.API}/${id}`);
  } */

  excluir(id: string | number) {

    return this.httpClient.delete(`${this.API}/${id}`, { responseType: 'text' }).pipe((first()));
  }

}
