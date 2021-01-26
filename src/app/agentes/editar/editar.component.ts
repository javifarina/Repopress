import { ActivatedRoute } from '@angular/router';
import { AgenteService } from './../../servicio/agentes';
import { Component, OnInit } from '@angular/core';
import { Agentes } from 'src/app/model/agentes';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  loadin =false;
  agenteList:Agentes;
  idAgente:number;
  constructor(
private agenteService:AgenteService,
private route:ActivatedRoute
) 
{
this.idAgente=+this.route.snapshot.paramMap.get('id');
 }

  ngOnInit(): void {

    this.cargarAgente()
  }
cargarAgente(){
   this.agenteService.cargarAggente(this.idAgente).subscribe(data =>{
     this.agenteList = data
     console.log(this.agenteList)
   })
  }
}
