import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';

import {DataTableModule, SharedModule} from 'primeng/primeng';

import { GpuTableComponent } from './gpu-table.component';
import { GpuService } from '../shared/services/gpu.service';

@NgModule({
  declarations: [
    GpuTableComponent,
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    SharedModule,
    HttpModule,
  ],
  providers: [
      GpuService,
      {provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [GpuTableComponent]
})
export class GpuTableModule { }