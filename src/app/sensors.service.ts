import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {AirQuality} from './air-quality';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  constructor(private httpClient: HttpClient) { }

  public getAirQuality(){
    return this.httpClient.get<AirQuality[]>('http://192.168.0.110:5000/');
  }

}
