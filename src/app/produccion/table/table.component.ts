
import { ProduccionService } from './../../servicio/produccion';
import { produccion } from './../../model/produccion';
import {MatPaginator} from '@angular/material/paginator';
import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

// Interface 

//Datos de la Tabla


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit{
prod:produccion[]

displayedColumns: string[] = ['id','fechaPedido','numero','apellidoCliente','apellidoAgente','seguimientoEstado','editar'];
  dataSource = new MatTableDataSource();

  
   @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
   @ViewChild(MatSort,{static:true}) sort: MatSort;



 constructor(private proService:ProduccionService){}
  ngOnInit(){
   this.getProduccion()
   
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
    
  }
  applyFilter(event: Event){
  const filterValue =(event.target as HTMLInputElement).value
  this.dataSource.filter = filterValue.trim().toLowerCase()
}
 getProduccion(){
 this.proService.getPedidos().subscribe(data =>{
      this.dataSource.data= data as any;
        console.log(this.dataSource.data)
      
})

}


  

 

}
