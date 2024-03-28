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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {SidebarModule} from "primeng/sidebar";
import { StartSaleComponent } from './customer/component/start-sale/start-sale.component';
import {CardModule} from "primeng/card";
import { RegisterCustomerComponent } from './customer/component/register-customer/register-customer.component';
import { SaleComponent } from './customer/component/sale/sale.component';
import {SplitterModule} from "primeng/splitter";
import {ConfirmationService, SharedModule} from "primeng/api";
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
import { AssembleFurnitureComponent } from './factory/assemble-furniture/assemble-furniture.component';
import { TemplateFurnitureComponent } from './administration/template-furniture/template-furniture.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TemplateDetailsComponent } from './administration/component/template-details/template-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPartComponent,
    StartSaleComponent,
    RegisterCustomerComponent,
    SaleComponent,
    SummaryInventoryComponent,
    SummaryInventoryListComponent,
    CheckFurnitureComponent,
    AssembleFurnitureComponent,
    TemplateFurnitureComponent,
    TemplateDetailsComponent
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
    FormsModule,
    SplitterModule,
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
    HttpClientModule,
    FormsModule,
    InputTextareaModule,
    DropdownModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
