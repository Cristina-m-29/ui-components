/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { McIconComponent } from './icon.component';

describe('IconComponent', () => {
  let component: McIconComponent;
  let fixture: ComponentFixture<McIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
