import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SerivesService } from '../serives.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {AuthSerives} from '../auth.serive';
import { UserComponent } from './user.component';
import {ActivatedRoute} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [HttpClientModule,HttpClientTestingModule,FormsModule,ActivatedRoute, RouterTestingModule],
      providers:[SerivesService,AuthSerives]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([SerivesService,AuthSerives], (service: SerivesService,autho:AuthSerives) => {
    expect(service).toBeTruthy();
  }));
});
