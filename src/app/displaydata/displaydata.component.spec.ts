import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SerivesService } from '../serives.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DisplaydataComponent } from './displaydata.component';
import {AuthSerives} from '../auth.serive';
import { RoleComponent } from '../role/role.component';
describe('DisplaydataComponent', () => {
  let component: DisplaydataComponent;
  let fixture: ComponentFixture<DisplaydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleComponent,DisplaydataComponent ],
      imports: [HttpClientModule,HttpClientTestingModule,FormsModule ],
      providers:[SerivesService,AuthSerives]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([SerivesService,AuthSerives], (service: SerivesService,autho:AuthSerives) => {
    expect(service).toBeTruthy();
  }));
});
