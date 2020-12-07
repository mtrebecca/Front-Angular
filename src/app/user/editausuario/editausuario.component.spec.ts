import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditausuarioComponent } from './editausuario.component';

describe('EditausuarioComponent', () => {
  let component: EditausuarioComponent;
  let fixture: ComponentFixture<EditausuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditausuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditausuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
