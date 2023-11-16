import { Component } from '@angular/core';
import {MatHeaderCellDef} from "@angular/material/table";
import {MatDialogRef} from "@angular/material/dialog";
import {UserModel} from "../../../../domain/users/user.model";
import {UserService} from "../../../../services/user.service";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {StoreService} from "../../../../services/store.service";
import {StoreModel} from "../../../../domain/users/store.model";

@Component({
  selector: 'app-popup',
  templateUrl: './popuptienda.component.html',
  styleUrls: ['./popuptienda.component.scss']
})
export class PopuptiendaComponent {

  contactForm!: FormGroup;

  listStores: StoreModel[] = [];
    constructor(private storeService: StoreService, private ref:MatDialogRef<PopuptiendaComponent>, private buildr:FormBuilder) { }

    ngOnInit(): void {
      this.contactForm = this.myform;
      this.storeService.getAllStore().subscribe(data => {
        console.log(data)
        this.listStores = data;
      });
    }

  closePopup(){
      this.ref.close();
    }

  crearTienda(): void {
    this.storeService.createStore(this.myform.value).subscribe(data => {
      this.closePopup();
      console.log(data);
      this.ngOnInit();
    });
    this.storeService.getAllStore().subscribe(data => {
      console.log(data);
      this.listStores = data;
    });
  }

  myform = this.buildr.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required]
  })


  protected readonly close = close;


}
