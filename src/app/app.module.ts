import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from 'primeng/menubar';
import { ListPartComponent } from './part/component/list-part.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from 'primeng/table';
import {ButtonModule} from "primeng/button";
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AddEditPartComponent} from "./part/component/add-edit-part/add-edit-part.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPartComponent
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
    ConfirmDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
