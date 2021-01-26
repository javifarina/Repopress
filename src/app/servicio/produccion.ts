import { produccion } from './../model/produccion';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ map } from 'rxjs/operators'
@Injectable({
    providedIn: 'root'
})

export class ProduccionService{
   produccion:produccion
   myAppUrl   = 'http://localhost:8180';
   myApiUrl   = '/api/pedidos/crear';
   myApiListar= '/api/pedidos/listar/';
   myImpresion= '/api/documentos/pdf/';

  //httpOptions={
     // headers: new HttpHeaders({'Content-type':'aplication/json'})}
   
    constructor(private http:HttpClient){}


        getPedidos(){
           return this.http.get(this.myAppUrl + this.myApiListar)
            .pipe(map(data =>{
               return data['listaTodosPedidos']
               }))
        }

       getDetallePedidos(){
           return this.http.get(this.myAppUrl + this.myApiListar)
            .pipe(map(data =>{
               return data['listaBolsa']
                    
               }))
        }
}