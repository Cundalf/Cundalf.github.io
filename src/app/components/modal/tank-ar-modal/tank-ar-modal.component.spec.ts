import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TankArModalComponent } from './tank-ar-modal.component';

describe('TankArModalComponent', () => {
  let component: TankArModalComponent;
  let fixture: ComponentFixture<TankArModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TankArModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TankArModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
