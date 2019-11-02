import { TestBed } from '@angular/core/testing';

import { DinamicDataService } from './dinamic-data.service';

describe('DinamicDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinamicDataService = TestBed.get(DinamicDataService);
    expect(service).toBeTruthy();
  });
});
