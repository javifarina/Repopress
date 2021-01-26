import { corte } from './../model/corte';
import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CorteService {
  corte:corte[]
  myAppUrl   = 'http://localhost:8180'
  myApiUrl   = '/api/tipos_corte/'
  
    
  constructor(private http:HttpClient) {}


   getCortes(): Observable<corte[]>{
    return this.http.get<corte[]>(this.myAppUrl+this.myApiUrl);
   }
}
