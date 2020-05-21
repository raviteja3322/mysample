import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHooksComponent } from './child-hooks.component';

describe('ChildHooksComponent', () => {
  let component: ChildHooksComponent;
  let fixture: ComponentFixture<ChildHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
