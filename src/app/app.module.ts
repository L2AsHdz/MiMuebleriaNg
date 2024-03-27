import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { ListPartComponent } from './part/component/list-part.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddEditPartComponent} from "./part/component/add-edit-part/add-edit-part.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import { SummaryInventoryComponent } from './factory/summary-inventory/summary-inventory.component';
import { SummaryInventoryListComponent } from './factory/summary-inventory-list/summary-inventory-list.component';
import { CheckFurnitureComponent } from './factory/check-furniture/check-furniture.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPartComponent,
    SummaryInventoryComponent,
    SummaryInventoryListComponent,
    CheckFurnitureComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    AddEditPartComponent,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    TableModule,
    ButtonModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
