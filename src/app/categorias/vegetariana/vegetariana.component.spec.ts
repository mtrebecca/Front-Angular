import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetarianaComponent } from './vegetariana.component';

describe('VegetarianaComponent', () => {
  let component: VegetarianaComponent;
  let fixture: ComponentFixture<VegetarianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegetarianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetarianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
