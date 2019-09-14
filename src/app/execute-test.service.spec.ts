import { TestBed } from '@angular/core/testing';

import { ExecuteTestService } from './execute-test.service';

describe('ExecuteTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExecuteTestService = TestBed.get(ExecuteTestService);
    expect(service).toBeTruthy();
  });
});
