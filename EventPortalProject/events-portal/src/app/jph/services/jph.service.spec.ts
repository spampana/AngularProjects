import { TestBed } from '@angular/core/testing';

import { JphService } from './jph.service';

describe('JphService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JphService = TestBed.get(JphService);
    expect(service).toBeTruthy();
  });
});
