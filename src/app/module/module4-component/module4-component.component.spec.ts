import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4ComponentComponent } from './module4-component.component';

describe('Module4ComponentComponent', () => {
  let component: Module4ComponentComponent;
  let fixture: ComponentFixture<Module4ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module4ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
