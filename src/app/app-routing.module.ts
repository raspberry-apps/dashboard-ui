import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirQualityChartComponent } from './air-quality-chart/air-quality-chart.component';

const routes: Routes = [
  {
    path:  'sensors',
    component:  AirQualityChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
