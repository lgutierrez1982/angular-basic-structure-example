import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../interfaces/cliente.iterface';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html',
  styles: [
  ]
})
export class ListadoClienteComponent implements OnInit {

  listaClientes!: Cliente[]; 
  totalCLiente!: number;
  clienteSeleccionado!: Cliente;

  constructor( private clientesService: ClientesService ) { }

  ngOnInit(): void {

    // this.clientesService.findAllCustomers()
    //   .subscribe( resp => {
    //     console.log(resp);
    //   });

      // this.clientesService.findAllCustomersTipado()
      // .subscribe( resp => {
      //   resp.forEach(cliente => {
      //     console.log('cliente', cliente);
      //   })
      // });

      // this.clientesService.findAllCustomersTipadoMap()
      // .subscribe( resp => {
      //   //resp.forEach(cliente => {
      //     console.log('cliente', resp);
      //   //})
      // });

      this.clientesService.findAllCustomersTipadoMapTotal()
      .subscribe( resp => {
        //resp.forEach(cliente => {
        console.log('cliente', resp);
        const { clientes, ok, total } = resp;
        console.log('desestructuracion clientes ', clientes );
        console.log('desestructuracion ok', ok );
        console.log('desestructuracion total', total );

        this.listaClientes = clientes;
        this.totalCLiente = total;
        //})
      });

  }

  verCliente( value: Cliente ) {

    console.log('info', value);
    this.clienteSeleccionado = value;
  }

}//fin clase
