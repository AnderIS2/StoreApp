import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../domain/users/user.model";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  listUsers: UserModel[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    });
  }

}
