import { Component } from '@angular/core';
import {MatHeaderCellDef} from "@angular/material/table";
import {MatDialogRef} from "@angular/material/dialog";
import {UserModel} from "../../../../domain/users/user.model";
import {UserService} from "../../../../services/user.service";
import {Form, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  listUsers: UserModel[] = [];

    constructor(private userService: UserService, private ref:MatDialogRef<PopupComponent>, private buildr:FormBuilder) { }

    ngOnInit(): void {
      this.userService.getAllUser().subscribe(data => {
        console.log(data);
        this.listUsers = data;
      });
    }

  closePopup(){
      this.ref.close();
    }

  crearUsuario(): void {
    this.userService.createUser(this.myform.value).subscribe(data => {
      this.closePopup();
      console.log(data);
      this.ngOnInit();
    });
  }

  myform = this.buildr.group({
    firstName: [''],
    secondName: [''],
    firstLastName: [''],
    secondLastName: [''],
    email: [''],
    age: [''],
    username: [''],
    password: ['']
  });







}
