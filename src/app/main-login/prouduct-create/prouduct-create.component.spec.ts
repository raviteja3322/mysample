import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProuductCreateComponent } from './prouduct-create.component';

describe('ProuductCreateComponent', () => {
  let component: ProuductCreateComponent;
  let fixture: ComponentFixture<ProuductCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProuductCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProuductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
