import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SensorsService } from '../sensors.service';
import { AirQuality } from '../air-quality';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';

@Component({
  selector: 'app-air-quality-chart',
  templateUrl: './air-quality-chart.component.html',
  styleUrls: ['./air-quality-chart.component.scss']
})
export class AirQualityChartComponent implements OnInit {
  airQuality: AirQuality[];
  pm10: any;
  pm25: any;

  public chart: Chart;

  constructor(private sensorService: SensorsService) { }

  ngOnInit() {
    this.sensorService.getAirQuality().subscribe((res)=>{
      this.airQuality = res;
      this.pm10 = this.airQuality.map(arr => { return [moment.utc(arr.time).valueOf() + moment().utcOffset() * 60000, arr.pm_10]})
      this.pm25 = this.airQuality.map(arr => { return [moment.utc(arr.time).valueOf() + moment().utcOffset() * 60000, arr.pm_25]})

      this.chart = new Chart({
        chart: {
          type: 'line'
        },
        title: {
          text: 'Air Quality'
        },
        credits: {
          enabled: false
        },
        xAxis: {
          type: 'datetime'
        },
        series: [
          {
            type: 'line',
            name: 'PM10',
            data: this.pm10
          },
          {
            type: 'line',
            name: 'PM25',
            data: this.pm25
          }
        ]
      });    
    });
  }
}
