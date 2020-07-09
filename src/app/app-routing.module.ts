import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';


const routes: Routes = [
  {
    path:"line",
    component:LineChartComponent
  },
  {
    path:"pie",
    component:PieChartComponent
  },
  {
    path:"bubble",
    component:BubbleChartComponent
  },
  {
    path:"bar",
    component:BarChartComponent
  },
  {
    path:"doughnut",
    component:DoughnutChartComponent
  },
  {
    path:"polar",
    component:PolarAreaChartComponent
  },
  {
    path:"radar",
    component:RadarChartComponent
  },
  {
    path:"scatter",
    component:ScatterChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
