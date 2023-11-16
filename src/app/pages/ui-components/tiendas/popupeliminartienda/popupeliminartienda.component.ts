import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-popupeliminar',
  templateUrl: './popupeliminartienda.component.html',
  styleUrls: ['./popupeliminartienda.component.scss']
})
export class PopupeliminartiendaComponent {

  listUsers: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<PopupeliminartiendaComponent>, private userService: UserService) {
    this.listUsers = data.listUsers;
  }

  eliminar(id: number): void {
    this.userService.deleteUser(id).subscribe(data => {
      this.closePopupEliminar();
      console.log(data);
    });
  }

  closePopupEliminar() {
    this.ref.close();
    return this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    });
  }

}
