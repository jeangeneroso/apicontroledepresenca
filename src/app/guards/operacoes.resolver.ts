import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { LideresService } from '@services/lideres.service';
import { Observable, of } from 'rxjs';
import { Operacao } from '../models/operacao.model';
import { OperacoesService } from '@services/operacoes.service';


export const operacoesResolver: ResolveFn<Operacao> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Operacao> => {

  const service = inject(OperacoesService);

  if (route.params && route.params['id']) {
    return service.loadById(route.params['id']);
  }

  return of({
    id: 0,
    nomeOperacao: ''
  } as Operacao);
};