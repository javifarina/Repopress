import { RouterModule } from '@angular/router';
import { cliente } from './../../model/cliente';
import { ClienteService } from './../../servicio/cliente.service';
import { BolsaComponent } from './../bolsa/bolsa.component';
import { bolsa } from './../../model/bolsa';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { PedidoService } from './../../servicio/pedido.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { from } from 'rxjs';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styles: [
  ]
})
export class PedidoComponent implements OnInit {
  cliente:cliente[];
  isValid:boolean =true

  constructor(public service:PedidoService,
              public dialog:MatDialog,
              public clienteList:ClienteService,
              public toastr:ToastrService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getClientes()
    this.resetForm()
  }
  resetForm(form?:NgForm){
    if(form = null)
    form.resetForm();
    this.service.formData ={
      //id: null,
      fechaPedido:new Date(),
      fechaEntraga:new Date(),
      fechaRequerido:new Date(),
      numero:Math.floor(10000000+Math.random()*9000000).toString(),
      diasVigencia:7,
      idAgente:9,
      idCliente:0,
      Observacion:'',
      listaBolsas:[],
      seguimientoEstado:'Presupuestado',
      conIva:false,
      fotopolimero:"",
      observacion:'20 descuento',
      diasEntrega:45,
      formaPago:'Contado Efectivo',

    }
    this.service.bolsaItems=[]
  }

  AddOrEditBolsas(bolsaItemsIndex,id){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="80%";
    dialogConfig.data = {bolsaItemsIndex,id}
    this.dialog.open(BolsaComponent,dialogConfig).afterClosed().subscribe(res =>{
      this.actualizaval()
    })
  }
  deleteBolsas(id:number,i:number){
    this.service.bolsaItems.splice(i,1)
  }
  getClientes(){
    this.clienteList.getClientes().subscribe(datacli => {
      this.cliente=datacli
    })
  }
  validateForm(){
    this.isValid=true
    if(this.service.formData.id ==0)
      this.isValid=false
    else if (this.service.bolsaItems.length == 0)
      this.isValid=false
    return this.isValid
  }
  onSubmit(form:NgForm){
    if (this.validateForm()) 
      this.service.saveBolsa().subscribe(res =>{
        console.log(res)
        this.resetForm();
        this.toastr.success('Guardado Exitoso..!!','Polimundi');
      })
    }

 actualizaval(){
   this.service.formData.listaBolsas=Object.assign( this.service.bolsaItems as bolsa[])


}

  }
 