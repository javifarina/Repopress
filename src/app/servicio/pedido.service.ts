import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { bolsa } from './../model/bolsa';
import { pedido } from './../model/pedido';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PedidoService{
   formData:pedido;
   bolsaItems:bolsa[];
   myAppUrl   = 'http://localhost:8180';
   myApiUrl   = '/api/pedidos/crear';
   myApiListar= '/api/pedidos/listar/';
   myImpresion= '/api/documentos/pdf/';

  //httpOptions={
     // headers: new HttpHeaders({'Content-type':'aplication/json'})}
   
    constructor(private http:HttpClient){}

    
    saveBolsa(){
      var body = {
        ...this.formData,
          listaBolsas: this.bolsaItems

      }
      return this.http.post(this.myAppUrl + this.myApiUrl,body)  
       
    }
    //cargar Pedidos 
    getPedidos(id:number){
           return this.http.get(this.myAppUrl + this.myApiListar + id)

    }
   
}

