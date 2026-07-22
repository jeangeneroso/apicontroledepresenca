import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ColaboradoresService } from '@services/colaboradores.service';
import { Observable, of } from 'rxjs';
import { Colaborador } from '../../app/models/colaborador.model';

export const colaboradoresResolver: ResolveFn<Colaborador> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Colaborador> => {

  const service = inject(ColaboradoresService);

  if (route.params && route.params['id']) {
    return service.loadById(route.params['id']);
  }

  return of({
    id: 0,
    nomeColaborador: '',
    rgColaborador: '',
    cpfColaborador: '',
    chavePix: ''
  } as Colaborador);
};