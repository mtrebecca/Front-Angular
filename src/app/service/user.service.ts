import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient ) { }

  // ENVIA UM REQUISIÇÃO GET PARA A API E RETORNA OS USUARIOS
  getUsers(): Observable<User[]>{
    const url = "http://localhost:8080/listarPessoas"
    return this.http.get<User[]>(url);
  }

  // ENVIA UMA REQUISIÇÃO GET PASSANDO UM ID COMOO PARAMETRO PARA A API E RETORNA O USUARIO ID
  getUser(id: number): Observable<User>{
    const url = "http://localhost:8080/listarCpf?id="+id
    return this.http.get<User>(url);
  }

  // ENVIA UMA REQUISIÇÃO DELETE PARA A API PASSANDO O ID COMO PARAMETRO 
  delUser(id: number): Observable<User>{
    const url = "http://localhost:8080/deletarPessoa?id="+id
    return this.http.delete<User>(url);
  }

  // ENVIA UMA REQUISIÇÃO PUT PARA A API E PASSA O USUARIO A SER ATUALIZADO
  // CORRESPONDENTE A CHAVE PRIMARIA ID
  updateUser(user: User): Observable<User>{
    const url = "http://localhost:8080/updatePessoa"
    return this.http.put<User>(url, user);
  }

  // ENVIA UMA REQUISIÇÃO POST PARA A API E PASSA O USUARIO A SER SALVO
  saveUser(user: User): Observable<User>{
    const url = "http://localhost:8080/salvarPessoa"
    return this.http.post<User>(url,user);
  }

}
