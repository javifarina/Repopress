import { PedidoService } from './../../servicio/pedido.service';
import { NgForm } from '@angular/forms';
import { corte } from './../../model/corte';
import { CorteService } from './../../servicio/corte.service';
import { MaterialService } from './../../servicio/material.service';
import { bolsa } from './../../model/bolsa';
import { material } from './../../model/material';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styles: [
  ]
})
export class BolsaComponent implements OnInit {
  formData:bolsa;
  material:material[];
  corte:corte[];
  valorMat:number;
  nomMaterial:string;
  isValid:boolean = true;
  indice:number
  constructor( 
  @Inject(MAT_DIALOG_DATA) public data,
  public MatDialogRef:MatDialogRef<BolsaComponent>,
  public materialService:MaterialService,
  public corteService:CorteService,
  public pedidoService:PedidoService) { }

  ngOnInit(){
    this.getTipoCorte()
    this.materialService.getMateriales().then(res => this.material=res as material[])
    
    if(this.data.bolsaItemsIndex ==null)
    this.formData={
    //id: null,
    alto:0,
    ancho:0,
    espesor:0,
    cantidad:0,
    color1:'',
    color2:'',
    fuelle:false,
    valmaterial:'',
    peso:0,
    precio:0,
    precio100:0,
    idPedido:this.data.pedidoNor,
    idTipoCorte:0,
    idTipoMaterial:0,
    impresion:false,
    motivo:'',
    especialidad:'Sin Especificar',
    dobleCara:false,
    color1Cantidad:0
  }
  else
  this.formData = Object.assign({},this.pedidoService.bolsaItems[this.data.bolsaItemsIndex])

    //console.log(this.data)
    
  }

getTipoCorte(){
 return this.corteService.getCortes().subscribe(datacorte =>{
   this.corte = datacorte
   //console.log(this.corte)
 })
}
getValorMat(ctrl){
  if(ctrl.selectedIndex == 0){
    this.valorMat=0;
    this.nomMaterial='';
  }
  else{
    
    this.formData.valmaterial=this.material[ctrl.selectedIndex-1].tipoMaterial
    this.valorMat=this.material[ctrl.selectedIndex-1].valor
    this.indice = ctrl.selectedIndex -1
    this.CalcularTotal()
  }
  
}
CalcularTotal(){
  
  this.formData.peso=(this.formData.alto*this.formData.ancho*this.formData.espesor*this.valorMat)/1000
  this.formData.precio100=parseFloat((this.formData.peso*this.formData.precio).toFixed(3))
}
onSubmit(form:NgForm){
 if(this.validateForm(form.value)){
   if(this.data.bolsaItemsIndex == null)
        this.pedidoService.bolsaItems.push(form.value)
    else
      this.pedidoService.bolsaItems[this.data.bolsaItemsIndex-1]=form.value
      //this.service.formData.listaBolsas=Object.assign( this.service.bolsaItems as bolsa[])
      this.MatDialogRef.close()
 }
}
validateForm(formData:bolsa){
  this.isValid = true;
    if (formData.idTipoMaterial == 0)
    this.isValid = false
    else if (formData.precio ==0)
      this.isValid = false
      else if (formData.alto <=0)
        this.isValid = false
        else if (formData.ancho <=0)
          this.isValid = false
          else if(formData.espesor <=0)
            this.isValid = false
    return this.isValid
}

}