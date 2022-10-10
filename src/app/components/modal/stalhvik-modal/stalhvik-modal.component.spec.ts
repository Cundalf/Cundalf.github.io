import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StalhvikModalComponent } from './stalhvik-modal.component';

describe('StalhvikModalComponent', () => {
  let component: StalhvikModalComponent;
  let fixture: ComponentFixture<StalhvikModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StalhvikModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StalhvikModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
