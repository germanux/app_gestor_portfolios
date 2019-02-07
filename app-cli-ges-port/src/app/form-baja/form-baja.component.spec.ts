/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormBajaComponent } from './form-baja.component';

describe('FormBajaComponent', () => {
  let component: FormBajaComponent;
  let fixture: ComponentFixture<FormBajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
