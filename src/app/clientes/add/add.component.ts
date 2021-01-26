import { cliente } from './../../model/cliente';
import { ClienteService } from './../../servicio/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {
  formaCliente : FormGroup; 
  fechaAltaAdd= new Date()
  idCliente = 0;
  accion = 'Agregar'
  clienteUdp:cliente
  constructor(private fb: FormBuilder,
              private route:ActivatedRoute,
              private clienteService:ClienteService,
              private router:Router) {
            this.formaCliente = this.fb.group({
                  nombre:['',Validators.required],
                  apellido:['',Validators.required],
                  fechaAlta:new Date().getFullYear,
                  cuil:['',],
                  cuit:['',],
                  telefono1:['',Validators.required],
                  telefono2:['',],
                  email:['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
                  sitio:['',],
                  direccion: ['',Validators.required],
                  localidad:['Resistencia',Validators.required], 
                  provincia:['Chaco',Validators.required],                
                  codigoPostal: ['3500',Validators.required],
                })
                if(+this.route.snapshot.paramMap.get('id')>0){
                  this.idCliente = +this.route.snapshot.paramMap.get('id');
                }
            }

  ngOnInit(): void {
        this.esEditar()
  }
GuardarCliente(){
   if (this.accion === 'Agregar' ){
    
    const clienteAdd: cliente ={ 
    
      nombre: this.formaCliente.get('nombre').value,
      apellido: this.formaCliente.get('apellido').value,
      fechaAlta: new Date(),
      cuil: "454656",
      cuit: this.formaCliente.get('cuit').value,
      telefono1:this.formaCliente.get('telefono1').value,
      telefono2:"1232",
      email: this.formaCliente.get('email').value,
      sitioWeb: "XX",
      razonSocial: "asda",
      direccion: this.formaCliente.get('direccion').value,
      localidad: this.formaCliente.get('localidad').value,
      provincia: this.formaCliente.get('provincia').value,
      codigoPostal: this.formaCliente.get('codigoPostal').value
    }
    console.log(clienteAdd)
    this.clienteService.guardarCliente(clienteAdd).subscribe(data =>{
      this.router.navigate(['/']);
    })
  }else{
   
    const cliente:cliente={
      id:this.clienteUdp.id,
      nombre: this.formaCliente.get('nombre').value,
      apellido: this.formaCliente.get('apellido').value,
      fechaAlta:this.clienteUdp.fechaAlta,
      cuil: "454656",
      cuit: this.formaCliente.get('cuit').value,
      telefono1:this.formaCliente.get('telefono1').value,
      telefono2:"1232",
      email: this.formaCliente.get('email').value,
      sitioWeb: "XX",
      razonSocial: "asda",
      direccion: this.formaCliente.get('direccion').value,
      localidad: this.formaCliente.get('localidad').value,
      provincia: this.formaCliente.get('provincia').value,
      codigoPostal: this.formaCliente.get('codigoPostal').value

    }
    console.log(cliente)
    this.clienteService.actualizarCliente(this.idCliente,cliente).subscribe(data=>{
      console.log("pass")
      this.router.navigate(['/']);
    })

  }
}
  esEditar(){
    if (this.idCliente > 0){
      this.accion ="Editar"
      this.clienteService.cargarCliente(this.idCliente).subscribe(data =>{
        this.clienteUdp = data
         this.formaCliente.patchValue({
          id:this.idCliente,
          nombre: data.nombre,
          apellido: data.apellido,
          fechaAlta:this.formaCliente.get('fechaAlta').value,
          cuit: data.cuit,
          cuil:'12312312',
          telefono1:data.telefono1,
          telefono2:"1232",
          email: data.email,
          sitioWeb: "XX",
          razonSocial: "asda",
          direccion: data.direccion,
          localidad: data.localidad,
          provincia: data.provincia,
          codigoPostal: data.codigoPostal,
         })
      })

    }
  }

  //control del campo Nombre
  get nombreNoValido() {
    return this.formaCliente.get('nombre').invalid && this.formaCliente.get('nombre').touched
  }
  // Control campo Apellido
  get apellidoNoValido() {
    return this.formaCliente.get('apellido').invalid && this.formaCliente.get('apellido').touched
  }
  get emailNoValido() {
    return this.formaCliente.get('email').invalid && this.formaCliente.get('email').touched
  }

  get telefono1NoValido() {
    return this.formaCliente.get('telefono1').invalid && this.formaCliente.get('telefono1').touched
  }
  get direccionNoValido() {
    return this.formaCliente.get('direccion').invalid && this.formaCliente.get('direccion').touched
  }
 
}

