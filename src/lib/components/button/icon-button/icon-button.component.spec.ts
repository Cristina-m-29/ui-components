import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McIconButtonComponent } from './icon-button.component';

describe('IconButtonComponent', () => {
  let component: McIconButtonComponent;
  let fixture: ComponentFixture<McIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ McIconButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
