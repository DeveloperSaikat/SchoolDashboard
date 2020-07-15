import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherDataEntryComponent } from './teacher-data-entry.component';

describe('TeacherDataEntryComponent', () => {
  let component: TeacherDataEntryComponent;
  let fixture: ComponentFixture<TeacherDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherDataEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
