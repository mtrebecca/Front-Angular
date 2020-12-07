import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { Categoria } from 'src/app/interface/categoria';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  //ENTRADA DE OBJETOS
  @Input() categoria: Categoria = <Categoria>{};
  @Input() produto: Produto = <Produto>{};

  // SAIDA OBJ PRODUTO ATRAVEZ DE UM EVENTO
  @Output() outputProduto: EventEmitter<Produto> = new EventEmitter();


  // CRIA O PRODUTO E ENVIA O FORMULARIO
  onSubmit() {
    this.produto.categoria = this.categoria;
    this.outputProduto.emit(this.produto)
  }

}
