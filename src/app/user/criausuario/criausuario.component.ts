import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';
import { ErrorMsgComponent } from 'src/app/body/error-msg/error-msg.component';

@Component({
  selector: 'app-criausuario',
  templateUrl: './criausuario.component.html',
  styleUrls: ['./criausuario.component.css']
})
export class CriausuarioComponent {

  //IMPORTANDO ERRO MSG COMPONENTE
@ViewChild(ErrorMsgComponent) error: ErrorMsgComponent;


public usuarios: User;
// INJETANDO O SERVICE E A ROUTER 
constructor(private service: UserService, private router: Router) { }

//adiciona usuario
saveUser(usuarios: User) {
this.service.saveUser(usuarios)
.subscribe(
() => {
  // SUCESS 
  this.usuarios = usuarios;
  // REDIRECIONA
  this.router.navigateByUrl('/admin/usuarios');
},
() => {
  //ERROR E TEMPO DE VISUALIZAÇÃO
  this.error.setError('Não foi possivel adicionar o produto',5000);
}
)
}

}
