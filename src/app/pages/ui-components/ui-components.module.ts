import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { PopupactualizarComponent } from './usuarios/popupactualizar/popupactualizar.component';
import { PopupmostrarComponent } from './usuarios/popupmostrar/popupmostrar.component';
import { FilterPipe } from './usuarios/pipes/filter.pipe';
import { PopupeliminarComponent } from './usuarios/popupeliminar/popupeliminar.component';
import {PopuptiendaComponent} from "./tiendas/popuptienda/popuptienda.component";
import {PopupmostrartiendaComponent} from "./tiendas/popupmostrartienda/popupmostrartienda.component";
import {PopupactualizartiendaComponent} from "./tiendas/popupactualizartienda/popupactualizartienda.component";
import {PopupeliminartiendaComponent} from "./tiendas/popupeliminartienda/popupeliminartienda.component";
import {FiltertiendaPipe} from "./tiendas/pipestienda/filtertienda.pipe";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ],
  declarations: [
    AppBadgeComponent,
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent,
    UsuariosComponent,
    TiendasComponent,
    PopupactualizarComponent,
    PopupmostrarComponent,
    FilterPipe,
    PopupeliminarComponent,
    PopuptiendaComponent,
    PopupmostrartiendaComponent,
    PopupactualizartiendaComponent,
    PopupeliminartiendaComponent,
    FiltertiendaPipe
  ]
})
export class UicomponentsModule {}
