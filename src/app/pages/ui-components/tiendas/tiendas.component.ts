import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../usuarios/popup/popup.component";
import {PopupeliminarComponent} from "../usuarios/popupeliminar/popupeliminar.component";
import {PopupactualizarComponent} from "../usuarios/popupactualizar/popupactualizar.component";
import {PopupmostrarComponent} from "../usuarios/popupmostrar/popupmostrar.component";
import {StoreModel} from "../../../domain/users/store.model";
import {StoreService} from "../../../services/store.service";
import {PopuptiendaComponent} from "./popuptienda/popuptienda.component";
import {PopupeliminartiendaComponent} from "./popupeliminartienda/popupeliminartienda.component";
import {PopupactualizartiendaComponent} from "./popupactualizartienda/popupactualizartienda.component";
import {PopupmostrartiendaComponent} from "./popupmostrartienda/popupmostrartienda.component";

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss']
})
export class TiendasComponent implements OnInit {

  listStores: StoreModel[] = [];

  constructor(private storeService: StoreService, private dialog: MatDialog) {
  }

  filterUsers = '';
  selectedFilter = ''

  ngOnInit(): void {
    this.storeService.getAllStore().subscribe(data => {
      console.log(data);
      this.listStores = data;
    });
  }

  openPopup() {
    this.dialog.open(PopuptiendaComponent, {
      width: '500px',
      height: '528px',
    })
  }
  openPopupEliminar(data: any) {
    this.dialog.open(PopupeliminartiendaComponent, {
      width: '400px',
      height: '135px',
      data: {listStores : data}
    })
  }

  openPopupUpdate(data: any) {
    this.dialog.open(PopupactualizartiendaComponent, {
      width: '500px',
      height: '528px',
      data: {listStores : data}
    })
  }

  openPopupMostrar(data: any) {
    this.dialog.open(PopupmostrartiendaComponent, {
      width: '500px',
      height: '484px',
      data: {listStores : data}
    });
  }

  eliminarUsuario(id: number): void {
    this.storeService.getById(id).subscribe(data => {
      this.openPopupEliminar(data);
      console.log(data);
      this.ngOnInit();
    });
  }

  consultarUsuario(id :number) :void{
    this.storeService.getById(id).subscribe(data => {
      this.openPopupMostrar(data);
      console.log(data);
      this.ngOnInit();
    });
  }
  actualizarUsuario(id:number): void {
    this.storeService.getById(id).subscribe(data => {
      this.openPopupUpdate(data);
      console.log(data);
    });
  }

  rowColor: string ="background: linear-gradient(153deg, rgba(244,16,16,1) 0%, rgba(255,0,104,1) 61%, rgba(57,10,185,1) 100%); color: white; ";

}
