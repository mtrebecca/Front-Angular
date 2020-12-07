import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { ErrorMsgComponent } from 'src/app/body/error-msg/error-msg.component';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  // RECEBE A VARIAVEL PRODUTOS A SER UTILIZADA NO HTML
  public produtos: Produto[];

  public produto: Produto;

  public searchText: String;

  //INJETA O COMPONENTE DE ERRO
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  // INJETA O SERVICE NO CONSTRUTOR
  constructor(private service: ProdutoService) { }

  //INICIALIZA O COMPONENTE CHAMANADO O METHODO getProdutos 
  ngOnInit(): void {
    this.getProdutos();
    
  }

  // ENVIA UMA REQUISIÇÃO GET PARA A API E RETORNA UMA LISTA DE PRODUTOS
getProdutos(){
  this.service.getProduto()
  .subscribe((produtos: Produto[]) =>{
    // SUCESSO
  this.produtos = produtos;
  }, () => {
    // FRACASO
    this.errorMsgComponent.setError('Falha ao Buscar Produtos',5000);
  });
}

// ENVIA UMA REQUISIÇÃO DELETE PARA A API PASSANDO O ID DO PRODUTO A SER APAGADO
deletaProduto(id: number){
this.service.deletaProduto(id)
.subscribe(() =>{
  //SUCESSO
  this.getProdutos();
}, () => {
  // FRACASO
  this.errorMsgComponent.setError("Erro ao Apagar Produto",5000);
})
}




}
