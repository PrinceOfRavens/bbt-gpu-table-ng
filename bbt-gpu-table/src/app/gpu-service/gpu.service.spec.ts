import { TestBed, inject } from '@angular/core/testing';

import { GpuServiceService } from './gpu-service.service';

describe('GpuServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpuServiceService]
    });
  });

  it('should be created', inject([GpuServiceService], (service: GpuServiceService) => {
    expect(service).toBeTruthy();
  }));
});
