import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admin-general-page',
  templateUrl: './admin-general-page.component.html',
  styleUrls: ['./admin-general-page.component.css']
})
export class AdminGeneralPageComponent implements OnInit {

  marksChart = [];

  constructor() { }

  ngOnInit(): void {
    setTimeout(this.chartOfMarks, 2000);
  }

  chartOfMarks(){
    let canvas = <HTMLCanvasElement> document.getElementById('canvasMarks');
    this.marksChart = new Chart(canvas, {
      responsive: true,
      maintainAspectRatio: true,
      type: 'line',
      data: {
          labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
          datasets: [{
              label: '% of marks',
              data: [78, 94, 90, 97, 88, 72],
              backgroundColor: ['rgba(255, 99, 132, 0.2)'],
              borderColor: ['rgba(255, 99, 132, 1)'],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}
