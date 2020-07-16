import { TestBed } from '@angular/core/testing';

import { AcountsService } from './acounts.service';

describe('AcountsService', () => {
  let service: AcountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
