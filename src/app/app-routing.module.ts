import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPartComponent} from "./part/component/list-part.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {StartSaleComponent} from "./customer/component/start-sale/start-sale.component";
import {SaleComponent} from "./customer/component/sale/sale.component";

const routes: Routes = [
  { path: 'part', component: ListPartComponent },
  { path: 'start-sale', component: StartSaleComponent },
  { path: 'sale', component: SaleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
