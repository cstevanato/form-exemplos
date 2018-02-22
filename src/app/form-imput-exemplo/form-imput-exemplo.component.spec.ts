import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormImputExemploComponent } from './form-imput-exemplo.component';

describe('FormImputExemploComponent', () => {
  let component: FormImputExemploComponent;
  let fixture: ComponentFixture<FormImputExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormImputExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormImputExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
