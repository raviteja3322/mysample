import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3ComponentComponent } from './module3-component.component';

describe('Module3ComponentComponent', () => {
  let component: Module3ComponentComponent;
  let fixture: ComponentFixture<Module3ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module3ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
