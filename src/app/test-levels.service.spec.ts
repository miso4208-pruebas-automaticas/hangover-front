import { TestBed } from '@angular/core/testing';

import { TestLevelsService } from './test-levels.service';

describe('TestLevelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestLevelsService = TestBed.get(TestLevelsService);
    expect(service).toBeTruthy();
  });
});
