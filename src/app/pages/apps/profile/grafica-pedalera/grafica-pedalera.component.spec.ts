import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPedaleraComponent } from './grafica-pedalera.component';

describe('GraficaPedaleraComponent', () => {
  let component: GraficaPedaleraComponent;
  let fixture: ComponentFixture<GraficaPedaleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaPedaleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaPedaleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
