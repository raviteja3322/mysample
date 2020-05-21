import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';

import { HttpComponent } from './http.component';
import { SerivesService } from '../serives.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpComponent ],
      imports: [HttpClientModule,HttpClientTestingModule ],
      providers:[SerivesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([SerivesService], (service: SerivesService) => {
    expect(service).toBeTruthy();
  }));
});
