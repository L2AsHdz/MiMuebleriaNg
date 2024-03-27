import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CardModule} from 'primeng/card';
import {CustomerService} from "../../service/customer.service";
import {MessageService} from "primeng/api";
@Component({
  selector: 'app-start-sale',
  templateUrl: './start-sale.component.html',
  styleUrls: ['./start-sale.component.css'],
  providers: [MessageService]
})
export class StartSaleComponent {
  showSlideModal:boolean = false;
  nit!:string;
  constructor(private formMap:FormBuilder, private customerService:CustomerService) {
  }

  saleForm = this.formMap.group({
    nit: [Validators.required],
    sellingUserId: ["", Validators.required],
    saleDate: [Validators.required]
  });

  showSlide(){
    this.showSlideModal = true;
  }

  hiddenSlideModal(isClose:boolean){
    this.showSlideModal = !isClose;
    this.nit = "";
  }
  findCustomerByNit(){
    this.customerService.getCustomerByNit(this.nit).subscribe(
      response => console.log(response),
      error => {
        if(error.status === 404){
          this.showSlide();
        }
      }
    )
  }
}
