import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartModule } from 'angular-highcharts';
import { HeaderComponent } from './header/header.component';
import { AirQualityChartComponent } from './air-quality-chart/air-quality-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AirQualityChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
