import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { GpuTableModule } from './app/gpu-table/gpu-table.module';
import { HistoricalModelModule } from './app/historical-model/historical-model.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(GpuTableModule)
  .catch(err => console.log(err));
