import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductUpdateComponent } from './prouduct-update.component';

describe('ProuductUpdateComponent', () => {
  let component: ProuductUpdateComponent;
  let fixture: ComponentFixture<ProuductUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuductUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
