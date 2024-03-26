import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Part} from "../model/part";

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http:HttpClient) { }
  private url: string = "http://localhost:8080/mim/api/part"
  public getPart():Observable<Part []>{
    return this.http.get<Part []>(this.url);
  }

  public addEdditPart(postData:any,type:string):Observable<any>{
    if(type === "Agregar"){
      return this.http.post<Part>(this.url,postData);
    }
    return this.http.put(`${this.url}/${postData.idPieza}`,postData);
  }

  public deletePart(idPieza:number){
    return this.http.delete(`${this.url}/${idPieza}`)
  }
}
