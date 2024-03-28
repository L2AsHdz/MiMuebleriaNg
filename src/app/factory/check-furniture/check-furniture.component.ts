import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { Furniture } from 'src/models/model';
import { FilterMatchMode, FilterService, SelectItem } from 'primeng/api';
import { FurnitureService } from 'src/service/furniture.service';

@Component({
  selector: 'app-check-furniture',
  templateUrl: './check-furniture.component.html',
  styleUrls: ['./check-furniture.component.css'],
})
export class CheckFurnitureComponent implements OnInit {
  furnitures!: Furniture[];
  selectedItems!: Furniture[];
  statuses!: any[];

  loading: boolean = false;
  useFilter: boolean = true;

  title: string = 'Verificar muebles ensamblados';
  @ViewChild('dt') table!: Table;
  // matchModeOptions!: SelectItem[];

  cols!: any[];

  constructor(private furnitureService: FurnitureService) {}

  ngOnInit(): void {
    this.getFurnitureWithOutCheck();

  }

  getFurnitureWithOutCheck() {
    this.loading = true;
    this.furnitureService.getFurnitureWithOutCheck().subscribe({
      next: (data) => {
        this.furnitures = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener los muebles', err);
        this.loading = false;
      },
    });
  }
  clear(table: Table) {
    table.clear();
  }
  formatDate(date: any) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = '0' + month;
    }

    if (day < 10) {
      day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }
  onDateSelect(value:any) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
  }
  checkFurniture() {
    let lstIds = "";
    if(this.selectedItems){
      this.selectedItems.forEach(x =>{
         lstIds += x.id+",";
      })
    }
    this.furnitureService.updateFurnite(lstIds).subscribe({
       next: response =>{
        this.getFurnitureWithOutCheck();
       },
       error: err =>{
        console.log("error: ", err);
       }
      }
    )
  }
}
