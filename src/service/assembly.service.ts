import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/app/factory/summary-inventory/item';
import { environment } from 'src/environments/environment.development';
import { Assembly, Furniture, Piece } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class AssemblyService {

  apiUrl = environment.apiUrl + '/assembly';

  constructor(private httpClient: HttpClient ) { }

  save(assembly: Assembly) {
    return this.httpClient.post<unknown>(`${this.apiUrl}/create`, assembly);
  }

}
