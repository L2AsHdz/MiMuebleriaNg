import { Component } from '@angular/core';
import {PartService} from "../service/part.service";
import {Part} from "../model/part";
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-part',
  templateUrl: './list-part.component.html',
  styleUrls: ['./list-part.component.css'],
  providers: [MessageService,ConfirmationService]
})
export class ListPartComponent {
  parts!:Part[];
  part!:Part;
  partDialog:boolean = true;

  displayAddModal = false;
  constructor(private partService:PartService, private messageService: MessageService, private confirmationService: ConfirmationService) {  }

  ngOnInit():void{
    console.log("Mande solicitud");
    this.getPartList();
  }
  getPartList(){
    this.partService.getPart().subscribe(
      response =>{
        this.parts = response;
      }
    );
  }

  editProduct(part: Part) {
    this.part = {...part};
    this.partDialog = true;
  }

  deleteProduct(part: Part) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + part.nombre + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.parts = this.parts.filter(val => val.idPieza !== part.idPieza);
        let {} = this.part;
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
      }
    });
  }

  showAddModal (){
    this.displayAddModal = true;
  }

  hideAddModal(isClose:boolean){
    this.displayAddModal = !isClose;

  }
}
