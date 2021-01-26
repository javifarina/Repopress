import { PedidoService } from './../servicio/pedido.service';
import { ClienteService } from './../servicio/cliente.service';
import { cliente } from './../model/cliente';
import { Component, OnInit } from '@angular/core';
import { pedido } from '../model/pedido';
import { Pipe, PipeTransform } from "@angular/core";
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styles: [
  ]
})
export class PedidosComponent implements OnInit {
  cliente:cliente[];
  todos:any
  idCliente:number;
  
  constructor(private serviceCliente:ClienteService,
              private servicePedidos:PedidoService) { }

  ngOnInit(): void {
  this.getCliente();
  
  }

// Carga todos los clientes al Select
  getCliente(){
   this.serviceCliente.getClientes().subscribe(datacli =>{this.cliente=datacli})


  }
//obtiene todos lospedidos del cliente determinado por el idCliente
  getPedidos(){
     this.servicePedidos.getPedidos(this.idCliente).subscribe((data:any) =>{
        this.todos=data;
        console.log(this.todos)})
      
  }
//obtiene el cliente seleccionado para cargar la tabla 
 obtenerCliente(cltr){
 if (cltr.selectedIndex == 0){
    this.idCliente=0}
    else{
      this.idCliente=cltr.value
    }
  this.getPedidos();

 }
  imprimirPedido(id:number){
   console.log("Cliente es " +this.idCliente)
   console.log("Numero de Pedido " + id)
  
}
}
