import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { Depen2injencComponent } from './depen2injenc.component';
import { SerivesService } from '../serives.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('Depen2injencComponent', () => {
  let component: Depen2injencComponent;
  let fixture: ComponentFixture<Depen2injencComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Depen2injencComponent ],
      imports: [HttpClientModule,HttpClientTestingModule ],
      providers:[SerivesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Depen2injencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([SerivesService], (service: SerivesService) => {
    expect(service).toBeTruthy();
  }));
});
