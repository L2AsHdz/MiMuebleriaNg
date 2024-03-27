import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {MessageService, SharedModule} from "primeng/api";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Part} from "../../model/part";
import {PartService} from "../../service/part.service";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-add-edit-part',
  templateUrl: './add-edit-part.component.html',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    SharedModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    NgIf
  ],
  styleUrls: ['./add-edit-part.component.css']
})
export class AddEditPartComponent implements OnChanges{
  @Input() displayAddModal:boolean = true;
  @Input() selectPart:any = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<Part> = new EventEmitter<Part>();
  modalType = "Agregar";

  partForm = this.formMap.group(
    {
      name : ["",Validators.required],
      unitPrice : [0,Validators.required],
      miniumStock : [0,Validators.required],
      state : [true],
      pieceId : [null]
    }
  );
  closeModal(){
    this.partForm.reset();
    this.clickClose.emit(true);
  }

  addEdditPart(){
    this.partService.addEdditPart(this.partForm.value,this.modalType).subscribe(
      response =>{
        this.clickAddEdit.emit(response);
        this.closeModal();
        const msg = this.modalType === "Agregar" ? "Parte agregada!" : "Parte editada!";
        this.messageService.add({severity:'success',summary:'success',detail:msg});
      },
      error => {
        this.messageService.add({severity:'error',summary:'Error',detail: error.error})
      }
    );
  }

  ngOnChanges() {
    if(this.selectPart){
      this.partForm.patchValue(this.selectPart);
      this.modalType = "Editar"
    }else{
      this.partForm.reset();
      this.modalType =  "Agregar"
    }
  }

  constructor(private formMap: FormBuilder, private partService:PartService, private messageService:MessageService) {

  }
}
