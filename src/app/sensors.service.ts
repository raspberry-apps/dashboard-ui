import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AirQuality} from './air-quality';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private httpClient: HttpClient) { }

  public getAirQuality() {
    return this.httpClient.get<AirQuality[]>('http://htpc.local:5000/');
  }

  public getAirQualityDayRange(days: number) {
    return this.httpClient.get<AirQuality[]>(`http://htpc.local:5000/days/${days}`);
  }

}
