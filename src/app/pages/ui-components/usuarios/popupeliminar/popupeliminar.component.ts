import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-popupeliminar',
  templateUrl: './popupeliminar.component.html',
  styleUrls: ['./popupeliminar.component.scss']
})
export class PopupeliminarComponent {

  listUsers: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private ref: MatDialogRef<PopupeliminarComponent>, private userService: UserService) {
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
