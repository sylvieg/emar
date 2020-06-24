import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DptMedsComponent } from './dpt-meds.component';

describe('DptMedsComponent', () => {
  let component: DptMedsComponent;
  let fixture: ComponentFixture<DptMedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DptMedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DptMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
