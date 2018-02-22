import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormListaExemploComponent } from './form-lista-exemplo.component';

describe('FormListaExemploComponent', () => {
  let component: FormListaExemploComponent;
  let fixture: ComponentFixture<FormListaExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormListaExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormListaExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
