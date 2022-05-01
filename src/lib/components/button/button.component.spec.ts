import { ComponentFixture, TestBed } from '@angular/core/testing';
import { McButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: McButtonComponent;
  let fixture: ComponentFixture<McButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ McButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
