import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/interface/produto'

@Component({
  selector: 'app-form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent {
  @Input() produto: Produto = <Produto>{};
  @Output() outputProduto: EventEmitter<Produto> = new  EventEmitter();

  onSubmit(){
    this.outputProduto.emit(this.produto);
  }

}
