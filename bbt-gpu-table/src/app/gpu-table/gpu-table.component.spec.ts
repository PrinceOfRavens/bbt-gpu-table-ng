import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuTableComponent } from './gpu-table.component';

describe('GpuTableComponent', () => {
  let component: GpuTableComponent;
  let fixture: ComponentFixture<GpuTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpuTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
