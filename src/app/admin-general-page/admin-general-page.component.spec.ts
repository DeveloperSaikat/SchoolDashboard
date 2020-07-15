import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGeneralPageComponent } from './admin-general-page.component';

describe('AdminGeneralPageComponent', () => {
  let component: AdminGeneralPageComponent;
  let fixture: ComponentFixture<AdminGeneralPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGeneralPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGeneralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
