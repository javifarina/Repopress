import { ClienteService } from './../../servicio/cliente.service';
import { cliente } from './../../model/cliente';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {

   loading = false;
  clientelist : cliente;
  idCliente :number;
  constructor(private clienteService:ClienteService,
              private route:ActivatedRoute) { 
    this.idCliente = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarCliente()
    console.log(this.idCliente)
  }
  cargarCliente(){
   this.clienteService.cargarCliente(this.idCliente).subscribe(data =>{
     this.clientelist = data
     console.log(this.clientelist)
   })
  }
}