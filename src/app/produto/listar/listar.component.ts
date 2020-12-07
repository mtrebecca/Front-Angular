import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/interface/produto';
import { ProdutoService } from 'src/app/service/produto.service';
import { ErrorMsgComponent } from 'src/app/body/error-msg/error-msg.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  // RECEBE OS DADOS RETORNADOS
  public produtos: Produto[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  //INJETA O SERVICE 
  constructor(private service: ProdutoService) { }

  // INICIA O COMPONENTE
  ngOnInit(): void {
    this.getProdutos();
  }

  // RETORNA OS PRODUTOS DA API E SUBSCREVE NA VARIAVEL PRODUTOS
  getProdutos(){
    this.service.getProduto()
    .subscribe((produtos: Produto[]) =>{
    this.produtos = produtos;
    }, () => {
      this.errorMsgComponent.setError('Falha ao Buscar Produtos',5000);
    });
  }

}
