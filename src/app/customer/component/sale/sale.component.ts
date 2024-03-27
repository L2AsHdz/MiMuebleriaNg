import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  providers:[MessageService]
})
export class SaleComponent implements OnInit{
  displayModal: boolean = true;

  @Input() nit!:string;
  @Input() sellingUser!:string;
  saleForm = this.formMap.group({
    nit: [this.nit,Validators.required],
    sellingUserId: [this.sellingUser,Validators.required],
    saleDate: ['2023-12-01',Validators.required]
  });
  constructor(private formMap:FormBuilder, private messageService:MessageService, private router:Router,private customerService:CustomerService) {
    // @ts-ignore
    this.nit = this.router.getCurrentNavigation()?.extras.state.nit;
    console.log(this.nit);
  }

  ngOnInit() {

  }

  closeModal() {

  }
}
