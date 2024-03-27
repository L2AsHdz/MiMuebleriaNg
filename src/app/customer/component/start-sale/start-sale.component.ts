import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CardModule} from 'primeng/card';
@Component({
  selector: 'app-start-sale',
  templateUrl: './start-sale.component.html',
  styleUrls: ['./start-sale.component.css']
})
export class StartSaleComponent {
  constructor(private formMap:FormBuilder) {
  }

  saleForm = this.formMap.group({
    nit: [Validators.required],
    sellingUserId: ["", Validators.required],
    saleDate: [Validators.required]
  });


}
