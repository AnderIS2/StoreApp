import { Component } from '@angular/core';
import {UserModel} from "../../../../domain/users/user.model";
import {UserService} from "../../../../services/user.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-popupmostrar',
  templateUrl: './popupmostrar.component.html',
  styleUrls: ['./popupmostrar.component.scss']
})
export class PopupmostrarComponent {

  listUsers: UserModel[] = [];
  constructor(private userService: UserService, private ref: MatDialogRef<PopupmostrarComponent>) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    });
  }

  closePopupMostrar() {
    this.ref.close();
  }


}
