import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerivesComponent } from './serives.component';

describe('SerivesComponent', () => {
  let component: SerivesComponent;
  let fixture: ComponentFixture<SerivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
