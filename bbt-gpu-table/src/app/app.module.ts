import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {DataTableModule, SharedModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
// import { GpuTableComponent } from './gpu-table/gpu-table.component';
import { GpuService } from './shared/services/gpu.service';

@NgModule({
  declarations: [
    AppComponent,
    // GpuTableComponent,
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    SharedModule,
    HttpModule,
  ],
  providers: [GpuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
