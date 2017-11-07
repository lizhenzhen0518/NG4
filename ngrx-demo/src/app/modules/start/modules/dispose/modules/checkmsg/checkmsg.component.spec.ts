import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmsgComponent } from './checkmsg.component';

describe('CheckmsgComponent', () => {
  let component: CheckmsgComponent;
  let fixture: ComponentFixture<CheckmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
