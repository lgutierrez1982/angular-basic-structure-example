import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor( /*private authService: AuthService,*/
               private router: Router,
               private authService: AuthService ) {

  }

  canActivate(): Observable<boolean> | boolean {
    
    //return true;
   
  //   return this.authService.validarToken()
  //                 .pipe(
  //                   tap( isAutenticate => {
  //                     if( !isAutenticate ) {
  //                       this.router.navigateByUrl('/login');
  //                     }
  //                   })
  //                 );//true para entrar, false para bloquear
  // }
    return this.authService.login('dsadsa','dsadsa')
                  .pipe(
                    tap( isAutenticate => {
                      if( !isAutenticate ) {
                        console.log('redireccion login')
                        this.router.navigateByUrl('/login');
                      }
                    })
                  );//true para entrar, false para bloquear
 
  }

}//end class
