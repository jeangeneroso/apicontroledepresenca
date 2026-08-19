import { TestBed } from '@angular/core/testing';

import { DiariasService } from './diarias.service';

describe('DiariasService', () => {
  let service: DiariasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiariasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
