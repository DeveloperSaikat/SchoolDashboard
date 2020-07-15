import { Component, OnInit, ViewChild } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  marks:string,
  remarks: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, marks: '',remarks:''},
  {position: 2, name: 'Helium', weight: 4.0026, marks: '',remarks:''},
  {position: 3, name: 'Lithium', weight: 6.941, marks: '',remarks:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, marks: '',remarks:''},
  {position: 1, name: 'Hydrogen', weight: 1.0079,marks: '',remarks:''},
  {position: 2, name: 'Helium', weight: 4.0026,marks: '',remarks:''},
  {position: 3, name: 'Lithium', weight: 6.941,marks: '',remarks:''},
  {position: 4, name: 'Beryllium', weight: 9.0122,marks: '',remarks:''},
  {position: 1, name: 'Hydrogen', weight: 1.0079,marks: '',remarks:''},
  {position: 2, name: 'Helium', weight: 4.0026,marks: '',remarks:''},
  {position: 3, name: 'Lithium', weight: 6.941,marks: '',remarks:''},
  {position: 4, name: 'Beryllium', weight: 9.0122,marks: '',remarks:''},
  {position: 1, name: 'Hydrogen', weight: 1.0079,marks: '',remarks:''},
  {position: 2, name: 'Helium', weight: 4.0026,marks: '',remarks:''}
];

@Component({
  selector: 'app-teacher-marks',
  templateUrl: './teacher-marks.component.html',
  styleUrls: ['./teacher-marks.component.css']
})
export class TeacherMarksComponent implements OnInit {

  startIndex = 0;
  endIndex = 8;
  data = ELEMENT_DATA;
  constructor() { }


  ngOnInit(): void {
    
  }

  getArrayFromNumber(length){
    return new Array(Math.ceil(length/8));
  }  

  updateIndex(pageIndex){
    this.startIndex = pageIndex*8;
    this.endIndex = this.startIndex+8;
  }

}
