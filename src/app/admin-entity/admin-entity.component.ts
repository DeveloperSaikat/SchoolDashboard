import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-admin-entity',
  templateUrl: './admin-entity.component.html',
  styleUrls: ['./admin-entity.component.css']
})
export class AdminEntityComponent implements OnInit {

  chartOfEvents = [];
  chartOfProfiles = [];
  
  constructor(private authSetup: AuthserviceService) { }

  ngOnInit(): void {
    setTimeout(this.chartProfiles, 2000);
    setTimeout(this.chartEvents,2000);
  }

  chartProfiles(){
    let canvas = <HTMLCanvasElement> document.getElementById('canvasProfile');
    this.chartOfProfiles = new Chart(canvas, {
      type: 'pie',
      data: {
          labels: ['Teachers', 'Students', 'Staffs'],
          datasets: [{
              label: '# of Profiles',
              data: [45,540,70],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        maintainAspectRatio: false,
          scales: {
              xAxes: [{
                gridLines: {
                  display : false
                },
                ticks:{
                  display: false
                }
              }],
              yAxes: [{
                gridLines: {
                  display : false
                },
                  ticks: {
                      display: false,
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }


  chartEvents(){
    let canvas = <HTMLCanvasElement> document.getElementById('canvasEvent');
    this.chartOfEvents = new Chart(canvas, {
      type: 'pie',
      data: {
          labels: ['Holiday', 'Exhibition','Cultural Activities'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.5)',
                  'rgba(54, 162, 235, 0.5)',
                  'rgba(255, 206, 86, 0.5)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        maintainAspectRatio: false,
          scales: {
            xAxes: [{
              gridLines: {
                display : false
              },
              ticks:{
                display: false
              }
            }],
              yAxes: [
                {
                  gridLines: {
                    display : false
                  },
                  ticks: {
                    display: false,
                    beginAtZero: true
                  }
              }]
          }
      }
  });
  }

  createTeacher(frm) {
    this.authSetup.createATeacher(frm.value);
  }

  createAnEvent(frm){
    this.authSetup.createAnEvent(frm.value);
  }

}
