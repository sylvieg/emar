import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedOrderSummaryComponent } from './med-order-summary.component';

describe('MedOrderSummaryComponent', () => {
  let component: MedOrderSummaryComponent;
  let fixture: ComponentFixture<MedOrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedOrderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
