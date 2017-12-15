import { TestBed, inject } from '@angular/core/testing';

import { HistoricalModelCalcService } from './historical-model-calc.service';

describe('HistoricalModelCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoricalModelCalcService]
    });
  });

  it('should be created', inject([HistoricalModelCalcService], (service: HistoricalModelCalcService) => {
    expect(service).toBeTruthy();
  }));
});
