import {Component, Inject} from '@angular/core';
import {UserModel} from "../../../../domain/users/user.model";
import {UserService} from "../../../../services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-popupmostrar',
  templateUrl: './popupmostrar.component.html',
  styleUrls: ['./popupmostrar.component.scss']
})
export class PopupmostrarComponent {

  listUsersMostrar: any;

  constructor( private ref: MatDialogRef<PopupmostrarComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.listUsersMostrar = data.listUsersMostrar;
  }


  closePopupMostrar() {
    this.ref.close();
  }

  parameterStyle: string ="font-size: 22px; font-weight: bold; color: #000000; font-family: 'Roboto', sans-serif;";
  infoStyle: string ="font-size: 20px; color: #darkgrey; font-family: 'Roboto', sans-serif; justify-content: right";

}
