import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaAvdCreateUpdateComponent } from './terapia-avd-create-update.component';

describe('TerapiaAvdCreateUpdateComponent', () => {
  let component: TerapiaAvdCreateUpdateComponent;
  let fixture: ComponentFixture<TerapiaAvdCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerapiaAvdCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerapiaAvdCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
