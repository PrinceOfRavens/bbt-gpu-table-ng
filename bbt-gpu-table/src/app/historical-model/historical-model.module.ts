import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule, SharedModule, InputTextModule, DropdownModule } from 'primeng/primeng';

import { HistoricalModelComponent } from './historical-model.component';
import { PoloniexPublicService } from '../shared/services/poloniex-public.service';
import { HistoricalModelCalcService } from '../shared/services/historical-model-calc.service';

@NgModule({
    declarations: [
        HistoricalModelComponent,
    ],
    imports: [
        BrowserModule,
        DataTableModule,
        SharedModule,
        InputTextModule,
        DropdownModule,
        HttpClientModule,
    ],
    providers: [
        PoloniexPublicService,
        HistoricalModelCalcService,
        {provide: APP_BASE_HREF, useValue : '/' }
    ],
    bootstrap: [HistoricalModelComponent]
})
export class HistoricalModelModule { }