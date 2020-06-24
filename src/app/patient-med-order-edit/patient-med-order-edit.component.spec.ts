import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedOrderEditComponent } from './patient-med-order-edit.component';

describe('PatientMedOrderEditComponent', () => {
  let component: PatientMedOrderEditComponent;
  let fixture: ComponentFixture<PatientMedOrderEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedOrderEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedOrderEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
