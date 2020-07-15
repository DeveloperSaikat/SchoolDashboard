import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

export interface StudentElement {
  Subject: string,
  Marks: number ,
  Total: number
}

export interface HomeWorkElement {
  Position: number,
  Subject: string,
  Topic: string
}

const ELEMENT_DATA: StudentElement[] = [
  {Subject: 'Physics', Marks: 31, Total: 40},
  {Subject: 'Chemistry', Marks: 35, Total: 40},
  {Subject: 'English', Marks: 39, Total: 40},
  {Subject: 'Biology', Marks: 32, Total: 40},
  {Subject: 'Mathematics', Marks: 34, Total: 40},
  {Subject: 'Hindi', Marks: 35, Total: 40}
];

const HOMEWORK_DATA: HomeWorkElement[] = [
  {Position: 1, Subject: 'Physics', Topic: 'Good understanding of Concepts'},
  {Position: 2, Subject: 'English', Topic: 'Improve sentence creation'},
  {Position: 3, Subject: 'Mathematics', Topic: 'Practice required for Integration'},
  {Position: 4, Subject: 'Chemistry', Topic: 'Need to work on Inorganic Chemistry'},
  {Position: 5, Subject: 'Hindi', Topic: 'Spelling mistakes to be taken care'},
];

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  chartOfStudentMarks = [];
  chartOfMarksInAYear = [];
  startIndex = 0;
  endIndex = 3;

  begIndex = 0;
  lastIndex = 3;

  data = ELEMENT_DATA;
  homework = HOMEWORK_DATA;
  constructor() { }

  ngOnInit(): void {
    setTimeout(this.chartTeachers, 2000);
    setTimeout(this.chartOfMarks, 2000);
  }

  getArrayFromNumber(length){
    return new Array(Math.ceil(length/3));
  }  

  updateIndex(pageIndex){
    this.startIndex = pageIndex*3;
    this.endIndex = this.startIndex+3;
  }

  updateCompleteIndex(pageIndex){
    this.begIndex = pageIndex*3;
    this.lastIndex = this.begIndex+3;
  }

  chartTeachers(){
    const canvas = <HTMLCanvasElement> document.getElementById('canvasStudent');
    const ctx = canvas.getContext('2d');
    this.chartOfStudentMarks = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Physics', 'Chemistry', 'Biology', 'Hindi', 'English'],
          datasets: [{
              label: '# of Votes',
              data: [31, 35, 35, 38, 36 ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        maintainAspectRatio: false,
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

  chartOfMarks(){
    const canvas = <HTMLCanvasElement> document.getElementById('canvasMarks');
    const ctx = canvas.getContext('2d');
    this.chartOfMarksInAYear = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Physics', 'Chemistry', 'Biology', 'Hindi', 'English'],
          datasets: [{
              label: '# of Votes',
              data: [31, 35, 35, 38, 36 ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        maintainAspectRatio: false,
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