import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItalianaComponent } from './italiana.component';

describe('ItalianaComponent', () => {
  let component: ItalianaComponent;
  let fixture: ComponentFixture<ItalianaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItalianaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
