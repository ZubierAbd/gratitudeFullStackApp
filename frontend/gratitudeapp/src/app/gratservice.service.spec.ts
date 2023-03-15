import { TestBed } from '@angular/core/testing';

import { GratserviceService } from './gratservice.service';

describe('GratserviceService', () => {
  let service: GratserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GratserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
