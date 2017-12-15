import { TestBed, inject } from '@angular/core/testing';

import { PoloniexPublicService } from './poloniex-public.service';

describe('PoloniexPublicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoloniexPublicService]
    });
  });

  it('should be created', inject([PoloniexPublicService], (service: PoloniexPublicService) => {
    expect(service).toBeTruthy();
  }));
});
