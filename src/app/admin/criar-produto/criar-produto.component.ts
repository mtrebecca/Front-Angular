import { Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router'
import { ErrorMsgComponent } from 'src/app/body/error-msg/error-msg.component';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/interface/produto';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.css']
})
export class CriarProdutoComponent{
  //IMPORTANDO ERRO MSG COMPONENTE
@ViewChild(ErrorMsgComponent) error: ErrorMsgComponent;


  public produto: Produto;
  // INJETANDO O SERVICE E A ROUTER 
  constructor(private service: ProdutoService, private router: Router) { }

  //adiciona produto
  addProduto(produto: Produto) {
this.service.addProduto(produto)
.subscribe(
  () => {
    // SUCESS 
    this.produto = produto;
    // REDIRECIONA
    this.router.navigateByUrl('/produto');
  },
  () => {
    //ERROR E TEMPO DE VISUALIZAÇÃO
    this.error.setError('Não foi possivel adicionar o produto',5000);
  }
  )
  }

}
