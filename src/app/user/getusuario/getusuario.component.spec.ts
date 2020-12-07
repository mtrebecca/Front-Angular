import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetusuarioComponent } from './getusuario.component';

describe('GetusuarioComponent', () => {
  let component: GetusuarioComponent;
  let fixture: ComponentFixture<GetusuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetusuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
