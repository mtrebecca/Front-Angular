import { Component, ViewChild } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { ErrorMsgComponent } from 'src/app/body/error-msg/error-msg.component';
import { Produto } from 'src/app/interface/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProdutoComponent } from '../form-produto/form-produto.component';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent {
//IMPORTA O COMPONENTE ERRO
@ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

public produto: Produto;

  constructor(private service: ProdutoService, private activeRoute: ActivatedRoute , private router: Router) { 

    this.getProduto(this.activeRoute.snapshot.params.id);
  }

  //BUSCAR PRODUTO POR ID PARA LISTAR NA PAGINA EDITAR
 getProduto(id: number){
   this.service.getProdutoId(id)
   .subscribe((produto: Produto) => {
     //RECEBE O PRODUTO A SER LISTADO NA PAGINA EDITAR
     this.produto = produto;   
   }, 
   // FRACASSO MENSAGEM DE ERRO POR 5s
   () => {this.errorMsgComponent.setError("erro ao buscar os produtos",5000); }
   );
 }


 //ATUALIZA O PRODUTO
 attProduto(produto: Produto){
   this.service.atualizaProduto(produto)
   .subscribe(
     // SUCESSO REDIRECIONA PARA /PRODUTO
     () => { this.router.navigateByUrl('/produto');   },
    // FRACASSO ERRO, TEMPO DE DURAÇÃO
     () => { this.errorMsgComponent.setError("falha ao atualizar o Produto", 5000); }
   )
 }

}
