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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService} from "primeng/api";
import {SidebarModule} from "primeng/sidebar";
import { StartSaleComponent } from './customer/component/start-sale/start-sale.component';
import {CardModule} from "primeng/card";
import { RegisterCustomerComponent } from './customer/component/register-customer/register-customer.component';
import { SaleComponent } from './customer/component/sale/sale.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPartComponent,
    StartSaleComponent,
    RegisterCustomerComponent,
    SaleComponent
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
        SidebarModule,
        CardModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
