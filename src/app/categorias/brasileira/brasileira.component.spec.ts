import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrasileiraComponent } from './brasileira.component';

describe('BrasileiraComponent', () => {
  let component: BrasileiraComponent;
  let fixture: ComponentFixture<BrasileiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasileiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrasileiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
