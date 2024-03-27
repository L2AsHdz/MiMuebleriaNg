import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/app/factory/summary-inventory/item';
import { environment } from 'src/environments/environment.development';
import { Furniture } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  apiUrl = environment.apiUrl + '/furniture';

  constructor(private httpClient: HttpClient ) { }

  getAllFurniture() {
    return this.httpClient.get<Item[]>(`${this.apiUrl}/summary`);
  }
  getFurnitureWithOutCheck(){
    return this.httpClient.get<Furniture[]>(`${this.apiUrl}/without-check`)
  }
  updateFurnite(ids: string){
    return this.httpClient.put<unknown>(`${this.apiUrl}/check-furniture`, ids);
  }
}
