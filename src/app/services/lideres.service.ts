import { Injectable } from '@angular/core';
import { Lider } from '../models/lider.model';
import { HttpClient } from '@angular/common/http';
import { first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LideresService {

  private readonly API = '/api/lideres'

  constructor( private httpClient:HttpClient ) { }

  list() {


    return this.httpClient.get<Lider[]>(this.API)
          .pipe(
            first(),
            tap(lideres => console.log(lideres))
          );
    
  }

  save(lider: Lider) : Observable<Lider>{
   return this.httpClient.post<Lider>(this.API,lider);
  }



}