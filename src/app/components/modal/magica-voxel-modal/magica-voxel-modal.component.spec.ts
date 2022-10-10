import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicaVoxelModalComponent } from './magica-voxel-modal.component';

describe('MagicaVoxelModalComponent', () => {
  let component: MagicaVoxelModalComponent;
  let fixture: ComponentFixture<MagicaVoxelModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicaVoxelModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagicaVoxelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
