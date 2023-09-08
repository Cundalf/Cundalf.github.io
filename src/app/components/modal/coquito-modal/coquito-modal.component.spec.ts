import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoquitoModalComponent } from './coquito-modal.component';

describe('CoquitoModalComponent', () => {
  let component: CoquitoModalComponent;
  let fixture: ComponentFixture<CoquitoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoquitoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoquitoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
