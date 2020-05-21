import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialserivesComponent } from './materialserives.component';

describe('MaterialserivesComponent', () => {
  let component: MaterialserivesComponent;
  let fixture: ComponentFixture<MaterialserivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialserivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialserivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
