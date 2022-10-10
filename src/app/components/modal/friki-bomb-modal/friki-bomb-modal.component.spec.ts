import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrikiBombModalComponent } from './friki-bomb-modal.component';

describe('FrikiBombModalComponent', () => {
  let component: FrikiBombModalComponent;
  let fixture: ComponentFixture<FrikiBombModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrikiBombModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrikiBombModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
