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
  selectPart:any = null;

  displayAddEditModal = false;
  constructor(private partService:PartService, private messageService: MessageService, private confirmationService: ConfirmationService) {  }

  ngOnInit():void{
    this.getPartList();
  }
  getPartList(){
    this.partService.getPart().subscribe(
      response =>{
        this.parts = response;
      }
    );
  }
  deletePart(part: Part) {
    this.confirmationService.confirm({
      message: 'Esta seguro de eliminar: ' + part.name + '?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.partService.deletePart(part.pieceId).subscribe(response=>{
          this.parts = this.parts.filter(val => val.pieceId !== part.pieceId);
          this.messageService.add({severity:'success', summary: 'Successful', detail: `Parte: ${part.name} eliminada!`});
        },
          error => this.messageService.add({severity:'error', summary: 'Error', detail: error})
        )
      }
    });
  }

  showAddModal (){
    this.displayAddEditModal = true;
    this.selectPart = null;
  }

  hideAddModal(isClose:boolean){
    this.displayAddEditModal = !isClose;
  }
//Se puede llamar al metodo para actulizar el listado en vez de las siguientes instrucciones
  saveUpdatePartoToList(event:any){
    console.log("Prueba save");
    console.log(event);
    console.log(this.selectPart);
    if(this.selectPart != null && this.selectPart.pieceId === event.pieceId){
      const indexPart = this.parts.findIndex(dataSearch => dataSearch.pieceId === event.pieceId);
      this.parts[indexPart] = event;
    }else{
      this.parts.unshift(event);
    }
  }

  showEditModal(part:Part){
    this.displayAddEditModal = true;
    this.selectPart = part;
  }
}
