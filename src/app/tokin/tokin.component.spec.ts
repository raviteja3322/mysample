import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokinComponent } from './tokin.component';

describe('TokinComponent', () => {
  let component: TokinComponent;
  let fixture: ComponentFixture<TokinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
