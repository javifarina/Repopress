import { EditproComponent } from './produccion/table/editpro/editpro.component';
import { EditarComponent } from './agentes/editar/editar.component';
import { ListarComponent } from './agentes/listar/listar.component';
import { AgregarComponent } from './agentes/agregar/agregar.component';
import { TableComponent } from './produccion/table/table.component';
import { EditComponent } from './clientes/edit/edit.component';
import { AddComponent } from './clientes/add/add.component';
import { cliente } from './model/cliente';
import { ProduccionComponent } from './produccion/produccion.component';
import { HomeComponent } from './home/home.component';
import { PedidoComponent } from './pedidos/pedido/pedido.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'pedidos',component:PedidosComponent},
  {path:'prod',component:ProduccionComponent},
  {path:'clientes',component:ClientesComponent},
  {path:'addcli',component:AddComponent},
  {path: 'editar/:id',component:AddComponent},
  {path: 'ver/:id',component:EditComponent},
  {path:'table',component:TableComponent},
  {path:'agente',component:ListarComponent},
  {path:'addAgente',component:AgregarComponent},
  {path:'editpro/:id',component:EditproComponent},
  {path:'pedido',children:[
    {path:'',component:PedidoComponent},
    {path:'edit/:id',component:PedidoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
