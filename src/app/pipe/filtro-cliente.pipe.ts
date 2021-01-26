import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroClientePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const redCliente =[];
    for(let cliente of value){
      if(cliente.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1 ){
         redCliente.push(cliente)
      }
    }
    return redCliente
  }   
  
}