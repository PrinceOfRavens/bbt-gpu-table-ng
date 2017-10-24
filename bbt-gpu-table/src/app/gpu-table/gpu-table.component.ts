import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { GpuService } from '../shared/services/gpu.service';
import { Gpu } from '../shared/models/gpu';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

@Component({
  selector: 'bbt-gpu-table',
  templateUrl: './gpu-table.component.html',
  styleUrls: ['./gpu-table.component.css']
})
export class GpuTableComponent implements OnInit {

  gpus: Observable<Gpu[]>;

  constructor(private gpuService: GpuService) { }

  ngOnInit() {
    this.gpus = this.gpuService.getGpuInfo().do(gpus => {

    });
  }

}
