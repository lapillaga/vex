import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaPedaleraCreateUpdateComponent } from './terapia-pedalera-create-update.component';

describe('TerapiaPedaleraCreateUpdateComponent', () => {
  let component: TerapiaPedaleraCreateUpdateComponent;
  let fixture: ComponentFixture<TerapiaPedaleraCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiaPedaleraCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaPedaleraCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
