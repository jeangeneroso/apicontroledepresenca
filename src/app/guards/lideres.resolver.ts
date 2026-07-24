import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { LideresService } from '@services/lideres.service';
import { Observable, of } from 'rxjs';
import { Lider } from '../models/lider.model';

export const LideresResolver: ResolveFn<Lider> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Lider> => {

  const service = inject(LideresService);

  if (route.params && route.params['id']) {
    return service.loadById(route.params['id']);
  }

  return of({
    id: 0,
    nomeLider: '',
    rgLider: '',
    cpfLider: '',
    chavePix: ''
  } as Lider);
};