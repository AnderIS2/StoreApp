import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../domain/users/user.model";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  listUsers: UserModel[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    });
  }

  changeRowColor(estado: string) : string {
    if (estado == "ROJO") {
      return 'red';
    } else if (estado == 'AMARILLO') {
      return 'yellow';
    } else if (estado == 'VERDE') {
      return 'green';
    } else if (estado == 'AZUL') {
      return 'blue';
    } else if(estado == 'NARANJA'){
      return 'orange';
    }else {
      return 'white';
    }
  }

}
