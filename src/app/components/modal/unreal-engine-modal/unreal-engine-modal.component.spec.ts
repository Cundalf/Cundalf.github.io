import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrealEngineModalComponent } from './unreal-engine-modal.component';

describe('UnrealEngineModalComponent', () => {
  let component: UnrealEngineModalComponent;
  let fixture: ComponentFixture<UnrealEngineModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrealEngineModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnrealEngineModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
