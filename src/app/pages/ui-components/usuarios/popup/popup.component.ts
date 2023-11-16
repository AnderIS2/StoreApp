import { Component } from '@angular/core';
import {MatHeaderCellDef} from "@angular/material/table";
import {MatDialogRef} from "@angular/material/dialog";
import {UserModel} from "../../../../domain/users/user.model";
import {UserService} from "../../../../services/user.service";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

  contactForm!: FormGroup;

  listUsers: UserModel[] = [];

    constructor(private userService: UserService, private ref:MatDialogRef<PopupComponent>, private buildr:FormBuilder) { }

    ngOnInit(): void {
      this.contactForm = this.myform;
      this.userService.getAllUser().subscribe(data => {
        console.log(data)
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
    this.userService.getAllUser().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    });
  }

  myform = this.buildr.group({
    firstName: ['', Validators.required],
    secondName: [''],
    firstLastName: ['', Validators.required],
    secondLastName: [''],
    email: ['', Validators.required],
    age: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required]
  })


  protected readonly close = close;




}
