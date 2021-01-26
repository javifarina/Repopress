import { Component, OnInit } from '@angular/core';
import { AgenteService } from './../../servicio/agentes';

import { Agentes } from './../../model/agentes';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaAgente:Agentes[];
  loading =false
  paginas =1
  filtro:string
  constructor(
private agenteService:AgenteService,
) 
{ }

  ngOnInit(): void {
    this.cargarAgente()

  }
cargarAgente(){
    this.loading=true
    this.agenteService.getAgentes().subscribe(data =>{
      this.loading =false
      this.listaAgente = data;
      console.log(this.listaAgente)
    });
  }
  delete(nuser:string){
      this.loading=true
    this.agenteService.deleteAgente(nuser).subscribe(data=>{
      this.cargarAgente()
      this.loading =false

    });

}
}