import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/guards/auth.guard';
import { AgregarUsuariosComponent } from './pages/agregar/agregar-usuarios.component';
import { ListaUsuariosComponent } from './pages/listado/lista-usuarios.component';
import { MainComponent } from '../home/pages/main/main.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    canActivate: [ AuthGuard ],
    children: [
      //clientes
      { path: 'agregar-usuario', component: AgregarUsuariosComponent },
      { path: 'listado-usuario', component: ListaUsuariosComponent },
      { path: '**', redirectTo:'listado-usuario' }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
