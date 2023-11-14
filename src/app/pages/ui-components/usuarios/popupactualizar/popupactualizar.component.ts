import { Component } from '@angular/core';
import {UserModel} from "../../../../domain/users/user.model";
import {UserService} from "../../../../services/user.service";
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-popupactualizar',
  templateUrl: './popupactualizar.component.html',
  styleUrls: ['./popupactualizar.component.scss']
})
export class PopupactualizarComponent {

  listUsers: UserModel[] = [];
  constructor(private userService: UserService, private ref: MatDialogRef<PopupactualizarComponent>, private buildr: FormBuilder) {
  }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    });
  }

  updateUser(id:number): void {
    this.userService.updateUser(id, this.myformupdate.value).subscribe(data => {
      this.closePopupUpdate();
      console.log(data);
      this.ngOnInit();
    });
  }

  closePopupUpdate() {
    this.ref.close();
  }

  myformupdate = this.buildr.group({
    firstName: [''],
    secondName: [''],
    firstLastName: [''],
    secondLastName: [''],
    email: [''],
    age: [''],
    username: [''],
    password: ['']
  })
}
