import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitKillerModalComponent } from './rabbit-killer-modal.component';

describe('RabbitKillerModalComponent', () => {
  let component: RabbitKillerModalComponent;
  let fixture: ComponentFixture<RabbitKillerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RabbitKillerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RabbitKillerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
