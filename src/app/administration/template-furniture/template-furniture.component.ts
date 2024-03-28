import { Component, OnInit, ViewChild } from '@angular/core';
import { Assembly, AssemblyDetails } from 'src/models/model';
import { AssemblyService } from 'src/service/assembly.service';
import { Router } from '@angular/router';
import { TemplateDetailsComponent } from '../component/template-details/template-details.component';

@Component({
  selector: 'app-template-furniture',
  templateUrl: './template-furniture.component.html',
  styleUrls: ['./template-furniture.component.css']
})

export class TemplateFurnitureComponent implements OnInit{

  @ViewChild('detalle') detalleComponent!: TemplateDetailsComponent;

  assembly !: Assembly;
  row : AssemblyDetails[] = [];
  detailstems !: AssemblyDetails[];

  constructor(
    private assemblyService: AssemblyService,
    ){}
  ngOnInit(): void {
    this.assembly = new Assembly();
  }
  saveTemplate(){
    if(!this.detailstems){
      console.log("Se requieren piezas")
      return;
    }
    this.assembly.assemblyDetails = this.detailstems;

    this.assemblyService.save(this.assembly).subscribe({
      next: response =>{
        console.log("Guardado correctamente")
        this.assembly = new Assembly();
        this.detalleComponent.limpiarDatos();
      },error: err =>{

      }
    })
  }

  onAdditionalItemsChange(items: any[]) {
    this.detailstems = items;
  }
}
