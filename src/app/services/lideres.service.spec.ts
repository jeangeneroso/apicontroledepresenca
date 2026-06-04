import { TestBed } from '@angular/core/testing';

import { LideresService } from './lideres.service';

describe('LideresService', () => {
  let service: LideresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LideresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
