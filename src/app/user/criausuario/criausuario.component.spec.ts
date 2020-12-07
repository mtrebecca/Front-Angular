import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriausuarioComponent } from './criausuario.component';

describe('CriausuarioComponent', () => {
  let component: CriausuarioComponent;
  let fixture: ComponentFixture<CriausuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriausuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
