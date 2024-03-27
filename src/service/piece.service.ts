import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from 'src/app/factory/summary-inventory/item';
import { environment } from 'src/environments/environment.development';
import { Furniture, Piece } from 'src/models/model';

@Injectable({
  providedIn: 'root'
})
export class PieceService {

  apiUrl = environment.apiUrl + '/piece';

  constructor(private httpClient: HttpClient ) { }

  getAllPiece() {
    return this.httpClient.get<Piece[]>(`${this.apiUrl}/all`);
  }

}
