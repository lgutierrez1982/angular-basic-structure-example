import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styles: [
  ]
})
export class AgregarClienteComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
               private clienteService: ClientesService ) { }

  ngOnInit(): void {

    //cuando no recibe datos por parametro cancela
    if( !this.activatedRoute.snapshot.params.id ) {
      console.log('no recibe parametros')
      return;
    }

    console.log('valor enviado ', this.activatedRoute.snapshot.params.id);
    
    this.activatedRoute.params
      .subscribe( resp => {
        console.log('resp', resp)
        this.clienteService.findCustomer( this.activatedRoute.snapshot.params.id )
          .subscribe(cliente => console.log('cliente', cliente));
      });

    // this.activatedRoute.params
    // .pipe(
    //   switchMap( ({id}) => {
    //     return this.clienteService.findCustomer( id )
    //   })
    // )
    // .subscribe( cliente => {
    //   console.log('cliente', cliente);
    // });

  }

}
