/* Coding taken and adapted from examples from class lectures */


import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class MyHttp {

  constructor() {}

  public async get(options: HttpOptions) {
    console.log(options.url);
    return await CapacitorHttp.get(options);
  }

}
