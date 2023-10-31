import { TestBed } from '@angular/core/testing';

import { RecipiApiService } from './recipi-api.service';

describe('RecipiApiService', () => {
  let service: RecipiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
