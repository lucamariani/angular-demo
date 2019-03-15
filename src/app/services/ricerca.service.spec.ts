import { TestBed } from '@angular/core/testing';

import { RicercaService } from './ricerca.service';

describe('RicercaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RicercaService = TestBed.get(RicercaService);
    expect(service).toBeTruthy();
  });
});
