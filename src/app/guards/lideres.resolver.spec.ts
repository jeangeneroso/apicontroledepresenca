import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { lideresResolver } from './lideres.resolver';

describe('lideresResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => lideresResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
