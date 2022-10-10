import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoeModalComponent } from './loe-modal.component';

describe('LoeModalComponent', () => {
  let component: LoeModalComponent;
  let fixture: ComponentFixture<LoeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
