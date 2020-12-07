import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormusuarioComponent } from './formusuario.component';

describe('FormusuarioComponent', () => {
  let component: FormusuarioComponent;
  let fixture: ComponentFixture<FormusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
