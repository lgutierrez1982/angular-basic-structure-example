import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    username: [ '', [ Validators.required ] ],
    password: [ '', [ Validators.required, Validators.minLength(6) ] ]
  });
  
  constructor( private fb: FormBuilder,
               private router: Router,
               private authService: AuthService ) { }

  ngOnInit(): void {
  }

  recuperarPassword(): void {
    //Mover a recuperar password
    this.router.navigateByUrl('/auth/recuperar');
  }

  login() {
    
    console.log('login');
    console.log(this.miFormulario.value);

    const { username, password } = this.miFormulario.value;
    console.log( 'desestructuracion', username, password );
  
    console.log( 'get', this.miFormulario.get('username')?.value);
    console.log( 'controls', this.miFormulario.controls.username.value);

    this.authService.login( username, password )
      .subscribe( resp => {

        console.log( 'login.component', resp );

        if( resp ) {
          console.log('redireccionar');
          this.router.navigateByUrl('/dashboard');
        }

      });

  }

}
