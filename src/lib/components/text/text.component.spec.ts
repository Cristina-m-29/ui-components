import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McTextComponent } from './text.component';

describe('McTextComponent', () => {
  let component: McTextComponent;
  let fixture: ComponentFixture<McTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ McTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
