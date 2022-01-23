import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './home/pages/main/main.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [

  {
    path: 'dashboard', component: MainComponent, canActivate: [ AuthGuard ]
  },
  {
    path: 'dashboard/clientes',
    loadChildren: () => import('./clientes/clientes.module').then( m => m.ClientesModule )
  },
  {
    path: 'documentos',
    loadChildren: () => import('./documentos/documentos.module').then( m => m.DocumentosModule )
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosModule )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
