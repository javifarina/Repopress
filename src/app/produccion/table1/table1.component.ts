import { ProduccionService } from './../../servicio/produccion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  detalle:any =[]
  constructor(
  private productoService:ProduccionService,
) { }

  ngOnInit(): void {
      this.productoService.getDetallePedidos().subscribe(data =>{
           this.detalle = data
            console.log(this.detalle)
})

  }

}
