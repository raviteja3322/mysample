import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHooksComponent } from './parent-hooks.component';

describe('ParentHooksComponent', () => {
  let component: ParentHooksComponent;
  let fixture: ComponentFixture<ParentHooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentHooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
