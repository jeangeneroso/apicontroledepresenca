import { Injectable } from '@angular/core';
import { Lider } from '../models/lider.model';
import { HttpClient } from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LideresService {

  private readonly API = '/api/lideres'

  constructor(private httpClient: HttpClient) { }

  list() {


    return this.httpClient.get<Lider[]>(this.API)
      .pipe(
        first(),
        tap(lideres => console.log(lideres))
      );

  }

  loadById(id: string | number) {
    return this.httpClient.get<Lider>(`${this.API}/${id}`);
  }

  save(lider: Lider): Observable<Lider> {
    if(lider.id){
      return this.update(lider)
    }

    return this.created(lider)
  }

  private created(lider: Lider) {
    return this.httpClient.post<Lider>(this.API, lider).pipe((first()));
  }

  private update(lider: Lider) {
    return this.httpClient.put<Lider>(`${this.API}/${lider.id}`, lider).pipe((first()));
  }

}


