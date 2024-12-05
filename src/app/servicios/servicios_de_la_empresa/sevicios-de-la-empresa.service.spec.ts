import { TestBed } from '@angular/core/testing';

import { SeviciosDeLaEmpresaService } from './sevicios-de-la-empresa.service';

describe('SeviciosDeLaEmpresaService', () => {
  let service: SeviciosDeLaEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeviciosDeLaEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
