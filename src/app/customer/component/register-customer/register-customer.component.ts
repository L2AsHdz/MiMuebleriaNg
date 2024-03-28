import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Customer} from "../../model/customer";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../service/customer.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit{
  @Input() showSlide:boolean = true;
  @Input() nit!:string;
  @Output() customer!:Customer;
  @Output() clickClose:EventEmitter<boolean> = new EventEmitter<boolean>();
  customerForm!:FormGroup;
ngOnInit() {
  this.customerForm= this.formMpa.group({
    nit:[this.nit,Validators.required],
    name:["",Validators.required],
    phone:[,Validators.required]
  });
}

  constructor(private formMpa:FormBuilder, private customerService:CustomerService, private messageService:MessageService, private router:Router) {

   }

   addEditCustomer(){
     this.customerService.addEditCustomer(this.customerForm.value).subscribe(
       response => {
         this.router.navigate(['/sale']);
       },
       error => this.messageService.add({severity:'error',summary:'Error',detail:error.error})
     )
   }

   closeModal(){
     this.clickClose.emit(true);
     this.customerForm.reset();
   }
}
