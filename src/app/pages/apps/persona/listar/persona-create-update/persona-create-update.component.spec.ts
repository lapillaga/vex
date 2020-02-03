import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCreateUpdateComponent } from './persona-create-update.component';

describe('PersonaCreateUpdateComponent', () => {
  let component: PersonaCreateUpdateComponent;
  let fixture: ComponentFixture<PersonaCreateUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaCreateUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
