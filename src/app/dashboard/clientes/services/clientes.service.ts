import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente.iterface';
import { map } from 'rxjs/operators';
import { ClienteResponse } from '../interfaces/cliente-response';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl: string = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  // login( username: string, password: string )/*: Observable<Characters[]>*/ {

  //   const body = { username, password };

  //   //return this.http.post('url', body);
  //   console.log(`${ this.baseUrl }/character`);
  //   //return this.http.get( `${ this.baseUrl }/character` );
  //   return this.http.get<ResponseRickAndMorty>( `${ this.baseUrl }/character` )
  //           .pipe(
  //             map(( resp: ResponseRickAndMorty ) => resp.results)
  //           );
  // }

  //Sin tipado
  findAllCustomers() {
    
    return this.http.get( `${ this.baseUrl }/clientes` );
  }

  //Con tipado
  findAllCustomersTipado(): Observable<Cliente[]> {
    
    return this.http.get<Cliente[]>( `${ this.baseUrl }/clientes` );
  }

  //Con tipado y map
  findAllCustomersTipadoMap(): Observable<Cliente[]> {
    
    return this.http.get<ClienteResponse>( `${ this.baseUrl }/clientesPagina` )
      .pipe(
        map(( resp: ClienteResponse ) => resp.clientes )
      );
  }

  //Con tipado y map y total
  findAllCustomersTipadoMapTotal(): Observable<ClienteResponse> {
    
    return this.http.get<ClienteResponse>( `${ this.baseUrl }/clientesPagina` );
  }

  findCustomer( value: number ) {
    
    return this.http.get( `${ this.baseUrl }/cliente` );
  }

}
