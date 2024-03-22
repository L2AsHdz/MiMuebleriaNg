import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPartComponent} from "./part/component/list-part.component";
import {NavbarComponent} from "./navbar/navbar.component";

const routes: Routes = [
  { path: 'part', component: ListPartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
