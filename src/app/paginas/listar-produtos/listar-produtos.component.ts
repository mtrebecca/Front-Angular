import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/interface/produto';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.css']
})
export class ListarProdutosComponent implements OnInit {
  public produtos: Produto[];
  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.service.getProduto()
    .subscribe((produtos: Produto[]) => {
      this.produtos = produtos;
    })
  }

}
