import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['2020', '2019', '2018', '2017', '2016'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 34, 90, 81, 12, 55, 22], label: 'mobile sales' },
    { data: [33, 48, 40, 19, 55, 67, 12], label: 'tv sales' }
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {
  }

}
