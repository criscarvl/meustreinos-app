import { TestBed } from '@angular/core/testing';

import { FichaTreinoService } from './ficha-treino.service';

describe('FichaTreinoService', () => {
  let service: FichaTreinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FichaTreinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
