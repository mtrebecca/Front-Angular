import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/interface/user';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/body/error-msg/error-msg.component';

@Component({
  selector: 'app-editausuario',
  templateUrl: './editausuario.component.html',
  styleUrls: ['./editausuario.component.css']
})
export class EditausuarioComponent{
  public usuario: User;
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;
  constructor(private service: UserService, private activeRoute: ActivatedRoute , private router: Router) { 

    this.getUserId(this.activeRoute.snapshot.params.id);
  }

  getUserId(id: number){
    this.service.getUser(id)
    .subscribe(
    (usuario: User) => {this.usuario = usuario},
    () => { this.errorMsgComponent.setError("Error ao buscar Usuario", 5000) });
  }

  attUser(usuario: User){
    this.service.updateUser(usuario)
    .subscribe(
      // SUCESSO REDIRECIONA PARA /usuarios
      () => { this.router.navigateByUrl('/admin/usuarios');   },
     // FRACASSO ERRO, TEMPO DE DURAÇÃO
      () => { this.errorMsgComponent.setError("falha ao atualizar o Produto", 5000); }
    )
  }
  

}
