import { TestBed } from '@angular/core/testing';

import { ProductoGaurdService } from './producto-gaurd.service';

describe('ProductoGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoGaurdService = TestBed.get(ProductoGaurdService);
    expect(service).toBeTruthy();
  });
});
