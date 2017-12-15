import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { ChartData } from '../models/chart-data'

@Injectable()
export class PoloniexPublicService {

  constructor(private http: HttpClient) { }

  returnChartData(currencyPair: string, start: number, end: number, period: number): Promise<ChartData[]> {
    const query = 'https://poloniex.com/public?command=returnChartData' + 
      '&currencyPair=' + currencyPair + '&start=' + start + '&end=' + end + '&period=' + period;

    return this.http.get<ChartData[]>(query).toPromise();
  }
}
