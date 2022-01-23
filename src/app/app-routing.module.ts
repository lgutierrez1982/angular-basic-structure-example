import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './dashboard/home/pages/main/main.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { AppComponent } from './app.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';

const routes: Routes = [
  
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DashboardRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
