import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {UserModel} from "../../../domain/users/user.model";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "./popup/popup.component";
import {PopupactualizarComponent} from "./popupactualizar/popupactualizar.component";
import {PopupmostrarComponent} from "./popupmostrar/popupmostrar.component";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  listUsers: UserModel[] = [];
  listUsersMostrar: UserModel[] = [];

  constructor(private userService: UserService, private dialog: MatDialog) {
  }

  filterUsers = '';

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    });
  }


  OpenPopup() {
    this.dialog.open(PopupComponent, {
      width: '500px',
      height: '520px',
    })
  }

  OpenPopupUpdate(id: number) {
    this.dialog.open(PopupactualizarComponent, {
      width: '500px',
      height: '520px',
    })
    }



  OpenPopupMostrar(data: any) {
    this.dialog.open(PopupmostrarComponent, {
      width: '500px',
      height: '470px',
      data: {listUsersMostrar : data}
    })
  }

  eliminarUsuario(id: number): void {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }

  ConsultarUsuario(id :number) :void{
    this.userService.getById(id).subscribe(data => {
      this.OpenPopupMostrar(data);
      console.log(data);
      this.ngOnInit();
  });
  }

  rowColor: string ="background: linear-gradient(153deg, rgba(244,16,16,1) 0%, rgba(255,0,104,1) 61%, rgba(57,10,185,1) 100%); color: white; ";

}
