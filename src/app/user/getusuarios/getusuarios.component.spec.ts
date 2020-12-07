import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetusuariosComponent } from './getusuarios.component';

describe('GetusuariosComponent', () => {
  let component: GetusuariosComponent;
  let fixture: ComponentFixture<GetusuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetusuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
