import {Component, Inject} from '@angular/core';
import {UserModel} from "../../../../domain/users/user.model";
import {UserService} from "../../../../services/user.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-popupactualizar',
  templateUrl: './popupactualizar.component.html',
  styleUrls: ['./popupactualizar.component.scss']
})
export class PopupactualizarComponent {

  contactForm!: FormGroup;

  listUsersUpdate: any;

  constructor(private userService: UserService, private ref: MatDialogRef<PopupactualizarComponent>, private buildr: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.listUsersUpdate = data.listUsersUpdate;
  }


  ngOnInit(id: number): void {
    this.contactForm = this.myformupdate;
    this.userService.getById(id).subscribe(data => {
      console.log(data);
      this.listUsersUpdate = data;
    });
  }
  updateUser(id:number): void {
    this.userService.updateUser(id, this.myformupdate.value).subscribe(data => {
      this.closePopupUpdate();
      console.log(data);
      this.ngOnInit(id);
    });
  }

  closePopupUpdate() {
    this.ref.close();
  }

  myformupdate = this.buildr.group({
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
