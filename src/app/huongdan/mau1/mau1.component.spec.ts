import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mau1Component } from './mau1.component';

describe('Mau1Component', () => {
  let component: Mau1Component;
  let fixture: ComponentFixture<Mau1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mau1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mau1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
