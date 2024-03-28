import { Component, OnInit } from '@angular/core';
import { FurnitureService } from 'src/service/furniture.service';
import { Item } from '../summary-inventory/item';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-summary-inventory-list',
  templateUrl: './summary-inventory-list.component.html',
  styleUrls: ['./summary-inventory-list.component.css']
})
export class SummaryInventoryListComponent implements OnInit{

  itemsFurniture!: Item[];

  constructor(
    private furnitureService: FurnitureService
    ) { }
  ngOnInit(): void {
    this.getFurniture();
  }


  getFurniture() {
    this.furnitureService.getAllFurniture().subscribe({
      next: (data) => {
        this.itemsFurniture = data;
      },
      error: err => {
        console.error('Error al obtener los muebles', err);
      }
    });
  }
}
