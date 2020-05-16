import { inject, TestBed } from '@angular/core/testing';

import { CanLoadApplicationGuard } from './can-load-application.guard';

describe('CanLoadApplicationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanLoadApplicationGuard]
    });
  });

  it('should ...', inject([CanLoadApplicationGuard], (guard: CanLoadApplicationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
