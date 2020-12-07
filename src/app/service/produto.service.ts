import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Produto } from '../interface/produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  // ENVIA UMA REQUISIÇÃO GET PARA API E RETORNA TODOS OS PRODUTOS
  getProduto(): Observable<Produto[]>{
    const url = "http://localhost:8080/listarTodos"
    return  this.http.get<Produto[]>(url);
  }

  // ENVIA UMA REQUISIÇÃO GET PARA API ENVIANDO O ID COMO PARAMETRO E RETORNA
  getProdutoId(id: number): Observable<Produto>{
    const url = "http://localhost:8080/listarId?id="+id;
    return  this.http.get<Produto>(url);
  }

  //ENVIA UMA REQUISIÇÃO POST PARA API E PASSA O PRODUTO A SER PASSADO
  addProduto(produto: Produto): Observable<Produto> {
    const url = "http://localhost:8080/salvar";
    return this.http.post<Produto>(url, produto);
  }

  // ENVIA UMA REQUISIÇÃO PUT PARA A API E PASSA O NOVO PRODUTO
  atualizaProduto(produto: Produto): Observable<Produto> {
    const url = "http://localhost:8080/atualizar";
    return this.http.put<Produto>(url, produto);
  }

  // ENVIA UMA REQUISIÇÃO DELETE PARA A API E PASSA O ID A SER DELETADO
  deletaProduto(id: number): Observable<Produto> {
    const url = "http://localhost:8080/deletar?id="+id;
    return this.http.delete<Produto>(url);
  }
}




