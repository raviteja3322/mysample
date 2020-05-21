import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AuthenticationComponent } from './authentication.component';
import { SerivesService } from '../serives.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AuthenticationComponent', () => {
  let component: AuthenticationComponent;
  let fixture: ComponentFixture<AuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticationComponent ],
      imports: [HttpClientModule,HttpClientTestingModule,FormsModule ],
      providers:[SerivesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([SerivesService], (service: SerivesService) => {
    expect(service).toBeTruthy();
  }));
});
