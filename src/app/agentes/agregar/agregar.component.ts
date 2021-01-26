import { AgenteService } from './../../servicio/agentes';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Agentes } from 'src/app/model/agentes';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
              formaAgente: FormGroup;
              idAgente=0;
              accion ='Agregar';
              agenteUdp:Agentes;

  constructor(
              private fb: FormBuilder,
              private route:ActivatedRoute,
              private agenteService:AgenteService,
              private router:Router,
              ) 
{ 
this.formaAgente = this.fb.group({
      nombre:['Javier',Validators.required],
      apellido:['Fariña',Validators.required],
      interno:['1002'],
      telefono:['3624331474',Validators.required],
      email:['javifarina@gmail.com', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      baja:[],
      nombreUsuario:['jfarina',Validators.required],
      contrasena:['asdasdasd',Validators.required],
      usuarioHabilitado:[],
      rol:['',Validators.required],
      fechaBaja:new Date().getFullYear,
      

})
if(+this.route.snapshot.paramMap.get('id')>0){
                  this.idAgente = +this.route.snapshot.paramMap.get('id');
                }
}

  ngOnInit(): void {
    
  }
guardarAgente(){
    if(this.accion === 'Agregar'){
        console.log('Entro a Agregar')
      const AgenteAdd: Agentes ={
          nombre:this.formaAgente.get('nombre').value,
          apellido:this.formaAgente.get('apellido').value,
          interno:this.formaAgente.get('interno').value,
          telefono:this.formaAgente.get('telefono').value,
          baja:this.formaAgente.get('baja').value,
          email:this.formaAgente.get('email').value,
          nombreUsuario:this.formaAgente.get('nombreUsuario').value,
          contrasena:this.formaAgente.get('contrasena').value,
           //fechaBaja:new Date(),
          usuarioHabilitado:this.formaAgente.get('usuarioHabilitado').value,
          rol:this.formaAgente.get('rol').value,

      }
      console.log(AgenteAdd)
      this.agenteService.guardarAgente(AgenteAdd).subscribe(data =>{
        console.log(data)
        this.router.navigate(['/'])
      })
  }else{
    const Agente: Agentes ={
      id:this.agenteUdp.id,
      nombre:this.formaAgente.get('nombre').value,
      apellido:this.formaAgente.get('apellido').value,
      email:this.formaAgente.get('email').value,
      nombreUsuario:this.formaAgente.get('nombreUsuario').value,
      rol:this.formaAgente.get('rol').value,
      interno:this.formaAgente.get('interno').value,
      contrasena:this.formaAgente.get('contraseña').value,
      telefono:this.formaAgente.get('telefono').value,
      baja:this.formaAgente.get('baja').value,
      fechaBaja: new Date(),
      usuarioHabilitado:this.formaAgente.get('usuarioHabilitado').value,
    }
    console.log(Agente)
    this.agenteService.actualizarAgente(this.idAgente, Agente).subscribe(data =>{
        console.log("pass")
        this.router.navigate(['/']);
    })
  }

}
esEditar(){
  if (this.idAgente > 0 ){
    this.accion ="Editar"
    this.agenteService.cargarAggente(this.idAgente).subscribe(data =>{
      this.agenteUdp = data
        this.formaAgente.patchValue({
        id:this.idAgente,
        nombre:data.nombre,
        apellido:data.apellido,
        email:data.email,
        nombreUsuario:data.nombreUsuario,
        rol:data.rol,
        contrasena:data.contrasena,
        interno:data.interno,
        telefono:data.telefono,
        })
    })
  }
}
//Control de Campo Nombre
get nombreNoValido(){
  return this.formaAgente.get('nombre').invalid && this.formaAgente.get('nombre').touched
}
//Control de campo Apellido
get apellidoNoValido(){
  return this.formaAgente.get('apellido').invalid && this.formaAgente.get('apellido').touched
}
//contol de Email
get emailNoValido(){
return this.formaAgente.get('email').invalid && this.formaAgente.get('email').touched
}
// control de Nombre de Usuario
get nombredeUsuarioNoValido(){
  return this.formaAgente.get('nombreUsuario').invalid && this.formaAgente.get('nombreUsuario').touched
}
get contrasenaNoValido(){
  return this.formaAgente.get('contrasena').invalid && this.formaAgente.get('contrasena').touched
}
get rolNoValido(){
  return this.formaAgente.get('rol').invalid && this.formaAgente.get('rol').touched
}
get telefonoNoValido(){
  return this.formaAgente.get('telefono').invalid && this.formaAgente.get('telefono').touched
}
get internoNoValido(){
return this.formaAgente.get('interno').invalid && this.formaAgente.get('interno').touched
}
}
