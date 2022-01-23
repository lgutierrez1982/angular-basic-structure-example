import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { AgregarClienteComponent } from './pages/agregar/agregar-cliente.component';
import { ListadoClienteComponent } from './pages/listado/listado-cliente.component';


@NgModule({
  declarations: [
    AgregarClienteComponent,
    ListadoClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
