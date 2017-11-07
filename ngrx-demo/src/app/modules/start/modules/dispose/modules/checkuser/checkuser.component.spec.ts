import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckuserComponent } from './checkuser.component';

describe('CheckuserComponent', () => {
  let component: CheckuserComponent;
  let fixture: ComponentFixture<CheckuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
