import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SensorsService } from '../sensors.service';
import { AirQuality } from '../air-quality';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { range } from 'rxjs';

@Component({
  selector: 'app-air-quality-chart',
  templateUrl: './air-quality-chart.component.html',
  styleUrls: ['./air-quality-chart.component.scss']
})
export class AirQualityChartComponent implements OnInit {
  airQuality: AirQuality[];
  pm10: any;
  pm25: any;
  range: string = "Last Day";

  public chart: Chart;

  constructor(private sensorService: SensorsService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
        let range = params['range'];
        let days;
        switch (range) {
          case "day":
            days = "1";
            this.range = "Last Day";
            break;
          case "week":
            days = "7";
            this.range = "Last Week";
            break;
          case "month":
            days = "31";
            this.range = "Last Month"
            break;
          default:
            days = "7";
            this.range = "Last Week"
            break;
        }
        this.sensorService.getAirQualityDayRange(days).subscribe((res)=>{
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
      });
  }
}
