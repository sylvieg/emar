import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedsComponent } from './user-meds.component';

describe('UserMedsComponent', () => {
  let component: UserMedsComponent;
  let fixture: ComponentFixture<UserMedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
