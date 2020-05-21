import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import { SerivesService } from '../serives.service';
import { Depen1injencComponent } from './depen1injenc.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Depen1injencComponent', () => {
  let component: Depen1injencComponent;
  let fixture: ComponentFixture<Depen1injencComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Depen1injencComponent ],
      imports: [HttpClientModule,HttpClientTestingModule ],
      providers:[SerivesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Depen1injencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([SerivesService], (service: SerivesService) => {
    expect(service).toBeTruthy();
  }));
});
