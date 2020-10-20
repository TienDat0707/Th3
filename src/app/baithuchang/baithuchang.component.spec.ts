import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaithuchangComponent } from './baithuchang.component';

describe('BaithuchangComponent', () => {
  let component: BaithuchangComponent;
  let fixture: ComponentFixture<BaithuchangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaithuchangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaithuchangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
