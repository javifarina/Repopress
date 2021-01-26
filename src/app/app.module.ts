

//Componentes
import { BolsaComponent } from './pedidos/bolsa/bolsa.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidoComponent } from './pedidos/pedido/pedido.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'
import { AppComponent } from './app.component';
//Servicios
import {FiltroClientePipe} from './pipe/filtro-cliente.pipe'
import { PedidoService } from './servicio/pedido.service';
//Entorno
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { ProduccionComponent } from './produccion/produccion.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AddComponent } from './clientes/add/add.component';
import { EditComponent } from './clientes/edit/edit.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TableComponent } from './produccion/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Table1Component } from './produccion/table1/table1.component';
import { ListarComponent } from './agentes/listar/listar.component';
import { AgregarComponent } from './agentes/agregar/agregar.component';
import { EditarComponent } from './agentes/editar/editar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditproComponent } from './produccion/table/editpro/editpro.component';



@NgModule({
  declarations: [
    AppComponent,
    BolsaComponent,
    PedidosComponent,
    PedidoComponent,
    NavbarComponent,
    HomeComponent,
    ProduccionComponent,
    ClientesComponent,
    AddComponent,
    EditComponent,
    FiltroClientePipe,
    TableComponent,
    Table1Component,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    EditproComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[RouterModule],
  entryComponents:[BolsaComponent],
  providers: [PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
