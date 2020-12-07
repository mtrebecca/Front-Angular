import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocesebolosComponent } from './docesebolos.component';

describe('DocesebolosComponent', () => {
  let component: DocesebolosComponent;
  let fixture: ComponentFixture<DocesebolosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocesebolosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocesebolosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
