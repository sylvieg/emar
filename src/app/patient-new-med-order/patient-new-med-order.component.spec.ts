import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNewMedOrderComponent } from './patient-new-med-order.component';

describe('PatientNewMedOrderComponent', () => {
  let component: PatientNewMedOrderComponent;
  let fixture: ComponentFixture<PatientNewMedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNewMedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNewMedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
