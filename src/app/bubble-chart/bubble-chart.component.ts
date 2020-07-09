import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';



@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {

  public bubbleChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          min: 0,
          max: 100,
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
        }
      }]
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartLegend = true;

  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 12, y: 44, r: 22 },
        { x: 43, y: 12, r: 44 },
        { x: 66, y: 55, r: 44}
      ],
      label: 'samsung sales',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
