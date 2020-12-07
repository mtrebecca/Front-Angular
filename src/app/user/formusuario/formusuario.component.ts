import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interface/user';


@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent {

  @Input() user: User = <User>{};
  // SAIDA OBJ PRODUTO ATRAVEZ DE UM EVENTO
  @Output() outputUser: EventEmitter<User> = new EventEmitter();


  // CRIA O PRODUTO E ENVIA O FORMULARIO
  onSubmit() {
    this.outputUser.emit(this.user);
  }

}
