import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpMedsComponent } from './grp-meds.component';

describe('GrpMedsComponent', () => {
  let component: GrpMedsComponent;
  let fixture: ComponentFixture<GrpMedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpMedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
