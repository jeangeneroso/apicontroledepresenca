import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { colaboradoresResolver } from './colaboradores.resolver';

describe('colaboradoresResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => colaboradoresResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
