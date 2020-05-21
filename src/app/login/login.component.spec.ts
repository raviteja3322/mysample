import { LoginComponent } from './login.component';
import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SerivesService } from '../serives.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {AuthSerives} from '../auth.serive';
import {ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let AuthSerives: AuthSerives;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientModule,HttpClientTestingModule,FormsModule,ActivatedRoute, RouterTestingModule],
      providers:[SerivesService,AuthSerives]
    })
  
    .compileComponents();
    AuthSerives = TestBed.get(AuthSerives);
  }));
  
  
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([SerivesService,AuthSerives], (service: SerivesService,autho:AuthSerives) => {
    expect(service).toBeTruthy();
  }));
});
