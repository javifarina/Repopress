import { material } from './../model/material';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
  cliente:material[]
  myAppUrl   = 'http://localhost:8180'
  myApiUrl   = '/api/tipos_material/'
  
    
  constructor(private http:HttpClient) {}


   getMateriales(){
    return this.http.get(this.myAppUrl+this.myApiUrl).toPromise();
   }
}
