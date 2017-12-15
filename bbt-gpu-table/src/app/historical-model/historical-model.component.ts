import { Component, OnInit } from '@angular/core';

import { HistoricalData } from '../shared/models/historical-data';
import { HistoricalModelCalcService } from '../shared/services/historical-model-calc.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'bbt-historical-model',
  templateUrl: './historical-model.component.html',
  styleUrls: ['./historical-model.component.scss']
})
export class HistoricalModelComponent implements OnInit {

  historicalData: Observable<HistoricalData[]>;

  loading: boolean = false;

  constructor(private historicalModelCalcService: HistoricalModelCalcService) { }

  ngOnInit() {
    this.loadChartData();
  }

  loadChartData() {
    this.historicalData = this.historicalModelCalcService.getCalculatedData();
  }

}
