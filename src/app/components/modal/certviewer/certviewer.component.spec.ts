import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertviewerComponent } from './certviewer.component';

describe('CertviewerComponent', () => {
  let component: CertviewerComponent;
  let fixture: ComponentFixture<CertviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertviewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
