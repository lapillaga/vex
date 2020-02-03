import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGraficoPedaleraComponent } from './widget-grafico-pedalera.component';

describe('WidgetGraficoPedaleraComponent', () => {
  let component: WidgetGraficoPedaleraComponent;
  let fixture: ComponentFixture<WidgetGraficoPedaleraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetGraficoPedaleraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGraficoPedaleraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
