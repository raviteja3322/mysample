import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UseridComponent } from './userid.component';

describe('UseridComponent', () => {
  let component: UseridComponent;
  let fixture: ComponentFixture<UseridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseridComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
