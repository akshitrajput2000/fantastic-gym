import { TestBed } from '@angular/core/testing';

import { logGuard } from './log.guard';

describe('LogGuard', () => {
  let guard: logGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(logGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
