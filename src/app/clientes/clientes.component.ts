import { cliente } from './../model/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../servicio/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {
  
  listaCliente:cliente[]
  loading = false
  paginas =1


  constructor(private clienteServices:ClienteService) { }
  filtro=""
  ngOnInit(): void {
    this.cargarClientes()
  }
cargarClientes(){
    this.loading=true
    this.clienteServices.getClientes().subscribe(data =>{
      this.loading =false
      this.listaCliente = data;
      console.log(this.listaCliente)
    });
  }
  delete(id:number){
      this.loading=true
    this.clienteServices.deleteCliente(id).subscribe(data=>{
      this.cargarClientes()
      this.loading =false

    })

  }
}
