import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../domain/users/user.model";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "./popup/popup.component";

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

  OpenPopup() {
    this.dialog.open(PopupComponent, {
      width: '500px',
      height: '520px'
    })
  }

  eliminarUsuario(id: number): void {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

}
