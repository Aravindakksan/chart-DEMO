import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Bi-cycle Sales', 'Motor-bike Sales', 'car Sales'];
  public doughnutChartData: MultiDataSet = [
    [234, 123, 455],
    [23, 123, 544],
    [455, 554, 67],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }
}
