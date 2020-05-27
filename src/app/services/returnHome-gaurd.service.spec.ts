import { TestBed } from '@angular/core/testing';

import { returnHomeGaurdService } from './returnHome-gaurd.service';

describe('returnHomeGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: returnHomeGaurdService = TestBed.get(returnHomeGaurdService);
    expect(service).toBeTruthy();
  });
});
