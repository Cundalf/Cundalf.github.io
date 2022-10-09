import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastFuriousModalComponent } from './fast-furious-modal.component';

describe('FastFuriousModalComponent', () => {
  let component: FastFuriousModalComponent;
  let fixture: ComponentFixture<FastFuriousModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastFuriousModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastFuriousModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
