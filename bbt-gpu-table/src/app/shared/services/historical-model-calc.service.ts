import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ChartData } from '../models/chart-data';
import { HistoricalData } from '../models/historical-data';
import { PoloniexPublicService } from './poloniex-public.service'; 

@Injectable()
export class HistoricalModelCalcService {

  private calculatedData: BehaviorSubject<HistoricalData[]> = new BehaviorSubject<HistoricalData[]>(undefined)

  constructor(private poloniexPublicService: PoloniexPublicService) { }

  getCalculatedData(): BehaviorSubject<HistoricalData[]> {
    this.poloniexPublicService
      .returnChartData('USDT_BTC', 1405699200, 9999999999, 86400)
      .then((value: ChartData[]) => {
        let histData: HistoricalData[] = [];
        for (const data of value) {
          const hist: HistoricalData = {
            datestamp: (data.date * 1000),
            high: data.high,
            low: data.low,
            open: data.open,
            close: data.close,
            change: ((data.close / data.open) - 1),
            isBiweekly: false,
            purchase: (25 / data.low),
            amount: 25
          };
          histData.push(hist);
        }
        this.calculatedData.next(histData);
      });

    return this.calculatedData;
  }
}
