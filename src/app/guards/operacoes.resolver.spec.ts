import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { operacoesResolver } from './operacoes.resolver';

describe('operacoesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => operacoesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
