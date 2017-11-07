import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncheckmsgComponent } from './uncheckmsg.component';

describe('UncheckmsgComponent', () => {
  let component: UncheckmsgComponent;
  let fixture: ComponentFixture<UncheckmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncheckmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncheckmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
