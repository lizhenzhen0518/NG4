import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncheckuserComponent } from './uncheckuser.component';

describe('UncheckuserComponent', () => {
  let component: UncheckuserComponent;
  let fixture: ComponentFixture<UncheckuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncheckuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncheckuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
