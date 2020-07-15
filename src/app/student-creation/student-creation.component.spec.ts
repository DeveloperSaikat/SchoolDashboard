import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreationComponent } from './student-creation.component';

describe('StudentCreationComponent', () => {
  let component: StudentCreationComponent;
  let fixture: ComponentFixture<StudentCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
