import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaiComponent } from './acai.component';

describe('AcaiComponent', () => {
  let component: AcaiComponent;
  let fixture: ComponentFixture<AcaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
