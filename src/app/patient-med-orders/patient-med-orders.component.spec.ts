import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientMedOrdersComponent } from './patient-med-orders.component';

describe('PatientMedOrdersComponent', () => {
  let component: PatientMedOrdersComponent;
  let fixture: ComponentFixture<PatientMedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientMedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientMedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
