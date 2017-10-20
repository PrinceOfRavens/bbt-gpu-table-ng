import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BbtTableComponent } from './bbt-table/bbt-table.component';
import { TableComponent } from './table/table.component';
import { GpuTableComponent } from './gpu-table/gpu-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BbtTableComponent,
    TableComponent,
    GpuTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
