import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabeComponent } from './arabe.component';

describe('ArabeComponent', () => {
  let component: ArabeComponent;
  let fixture: ComponentFixture<ArabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
