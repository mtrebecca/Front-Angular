import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';
import { ErrorMsgComponent } from 'src/app/body/error-msg/error-msg.component';

@Component({
  selector: 'app-getusuarios',
  templateUrl: './getusuarios.component.html',
  styleUrls: ['./getusuarios.component.css']
})
export class GetusuariosComponent implements OnInit {
  public users: User[];
  constructor(private service: UserService) { }
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.service.getUsers()
  .subscribe((users: User[]) =>{
    this.users = users;
  }, ()=> {this.errorMsgComponent.setError("Falha ao Buscar Usuarios", 5000)})
  }

  delUsuarios(id: number){
    this.service.delUser(id)
    .subscribe(
      () => {this.getUsuarios(); },
      () => {this.errorMsgComponent.setError("Erro ao deletar Usuario",5000); });
  }


}
