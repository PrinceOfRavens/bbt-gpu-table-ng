import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Gpu } from '../models/gpu';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class GpuService {

  constructor(private http: Http) { }

  getGpuInfo():Observable<Gpu[]> {
    return this.http.get('https://cdn.shopify.com/s/files/1/2347/6843/files/gpu-data.json?13588704022768495970')
      .map(res => <Gpu[]> res.json().data);
  }

}
