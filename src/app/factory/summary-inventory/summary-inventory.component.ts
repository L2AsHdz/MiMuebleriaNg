import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Cols, Item } from './item';
import { PrimeNGConfig } from 'primeng/api';
import { FurnitureService } from 'src/service/furniture.service';

@Component({
  selector: 'app-summary-inventory',
  templateUrl: './summary-inventory.component.html',
  styleUrls: ['./summary-inventory.component.css'],
})
export class SummaryInventoryComponent implements OnInit {

  @Input() items!: Item[];
  @Input() title !: string;
  @Input() checkVisible : boolean = false;

  selectedItems!: Item[];
  statuses!: any[];

  loading: boolean = true;
  useFilter: boolean = true;

  @ViewChild('dt') table!: Table;

  cols = Cols;


  constructor(
    private primengConfig: PrimeNGConfig,

  ) {}

  ngOnInit(): void {
    this.loading = false;
    this.primengConfig.ripple = true;
  }

  onActivityChange(event: any) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onDateSelect(value: any) {
    this.table.filter(this.formatDate(value), 'date', 'equals');
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
  clear(table: Table) {
    table.clear();
  }


}
