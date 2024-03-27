import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPartComponent} from "./part/component/list-part.component";
import { SummaryInventoryListComponent } from './factory/summary-inventory-list/summary-inventory-list.component';
import { CheckFurnitureComponent } from './factory/check-furniture/check-furniture.component';

const routes: Routes = [
  { path: 'part', component: ListPartComponent },
  { path: 'summary-factory', component: SummaryInventoryListComponent },
  { path: 'check-furniture', component: CheckFurnitureComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
