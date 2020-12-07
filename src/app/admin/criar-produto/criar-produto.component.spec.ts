import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProdutoComponent } from './criar-produto.component';

describe('CriarProdutoComponent', () => {
  let component: CriarProdutoComponent;
  let fixture: ComponentFixture<CriarProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
