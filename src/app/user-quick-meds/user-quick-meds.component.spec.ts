import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuickMedsComponent } from './user-quick-meds.component';

describe('UserQuickMedsComponent', () => {
  let component: UserQuickMedsComponent;
  let fixture: ComponentFixture<UserQuickMedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuickMedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuickMedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
