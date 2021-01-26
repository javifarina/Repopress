
import { Agentes } from './../model/agentes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgenteService {
  agente:Agentes[]
  myAppUrl   = 'http://localhost:8180'
  myApiUrl   = '/api/usuarios/'
  httpOptions = { 
          headers: new HttpHeaders({
          'Content-type':'application/json'})}
    
  constructor(private http:HttpClient) {}


    getAgentes(){
           return this.http.get(this.myAppUrl + this.myApiUrl)
            .pipe(map(data =>{
               return data['listaHabilitados']
               }))
        }
  //Borra dato de la Base de Datos
  deleteAgente(nuser: string):Observable<Agentes>{
    return this.http.delete<Agentes>(this.myAppUrl+this.myApiUrl+nuser)
  }
  guardarAgente(agente:Agentes): Observable<Agentes>{
    return this.http.post<Agentes>(this.myAppUrl + this.myApiUrl, agente, this.httpOptions)
  }
  cargarAggente(id: number):Observable<Agentes>{
      return this.http.get<Agentes>(this.myAppUrl + this.myApiUrl+ id)
  }
  actualizarAgente(id: number, agente:Agentes): Observable<Agentes>{
      return this.http.post<Agentes>(this.myAppUrl + this.myApiUrl,agente, this.httpOptions)
  }
}