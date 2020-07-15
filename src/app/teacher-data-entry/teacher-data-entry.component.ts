import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  attendance : boolean
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, attendance: false},
  {position: 2, name: 'Helium', weight: 4.0026, attendance: false},
  {position: 3, name: 'Lithium', weight: 6.941, attendance: false},
  {position: 4, name: 'Beryllium', weight: 9.0122, attendance: false},
  {position: 1, name: 'Hydrogen', weight: 1.0079,attendance: false},
  {position: 2, name: 'Helium', weight: 4.0026,attendance: false},
  {position: 3, name: 'Lithium', weight: 6.941,attendance: false},
  {position: 4, name: 'Beryllium', weight: 9.0122,attendance: false},
  {position: 1, name: 'Hydrogen', weight: 1.0079,attendance: false},
  {position: 2, name: 'Helium', weight: 4.0026,attendance: false},
  {position: 3, name: 'Lithium', weight: 6.941,attendance: false},
  {position: 4, name: 'Beryllium', weight: 9.0122,attendance: false},
  {position: 1, name: 'Hydrogen', weight: 1.0079,attendance: false},
  {position: 2, name: 'Helium', weight: 4.0026,attendance: false},
  {position: 3, name: 'Lithium', weight: 6.941,attendance: false}
];

@Component({
  selector: 'app-teacher-data-entry',
  templateUrl: './teacher-data-entry.component.html',
  styleUrls: ['./teacher-data-entry.component.css']
})



export class TeacherDataEntryComponent implements OnInit{

  
  constructor() { }
  startIndex = 0;
  endIndex = 5;
  data = ELEMENT_DATA;


  ngOnInit(): void {
    
  }

  getArrayFromNumber(length){
    return new Array(Math.ceil(length/5));
  }  

  updateIndex(pageIndex){
    this.startIndex = pageIndex*5;
    this.endIndex = this.startIndex+5;
  }

}
