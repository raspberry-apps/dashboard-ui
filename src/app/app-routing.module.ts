import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirQualityChartComponent } from './air-quality-chart/air-quality-chart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:  'sensors',
    component:  AirQualityChartComponent
  },
  {
    path:  'sensors/:range',
    component:  AirQualityChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
