import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-popupmostrar',
  templateUrl: './popupmostrartienda.component.html',
  styleUrls: ['./popupmostrartienda.component.scss']
})
export class PopupmostrartiendaComponent {

  listStore: any;

  constructor(private ref: MatDialogRef<PopupmostrartiendaComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.listStore = data.listStore;
  }


  closePopupMostrar() {
    this.ref.close();
  }

  parameterStyle: string ="font-size: 22px; font-weight: bold; color: #000000; font-family: 'Roboto', sans-serif;";
  infoStyle: string ="font-size: 20px; color: #darkgrey; font-family: 'Roboto', sans-serif; justify-content: right";

}
