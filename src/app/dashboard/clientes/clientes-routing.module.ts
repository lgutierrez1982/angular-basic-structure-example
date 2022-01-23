import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../auth/guards/auth.guard';
import { MainComponent } from '../home/pages/main/main.component';
import { AgregarClienteComponent } from './pages/agregar/agregar-cliente.component';
import { ListadoClienteComponent } from './pages/listado/listado-cliente.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    canActivate: [ AuthGuard ],
    children: [
      //clientes
      { path: 'agregar-cliente', component: AgregarClienteComponent },
      { path: 'editar-cliente/:id', component: AgregarClienteComponent },
      { path: 'listado-cliente', component: ListadoClienteComponent },
      { path: '**', redirectTo:'listado-cliente' }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
