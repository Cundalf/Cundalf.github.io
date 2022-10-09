import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalatinusModalComponent } from './palatinus-modal.component';

describe('PalatinusModalComponent', () => {
  let component: PalatinusModalComponent;
  let fixture: ComponentFixture<PalatinusModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalatinusModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalatinusModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
