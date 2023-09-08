import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularDroneXModalComponent } from './modular-drone-x-modal.component';

describe('ModularDroneXModalComponent', () => {
  let component: ModularDroneXModalComponent;
  let fixture: ComponentFixture<ModularDroneXModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModularDroneXModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModularDroneXModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
