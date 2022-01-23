import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class MenuComponent {

  menu: MenuItem[] = [
    { ruta: '/usuarios/agregar-usuario', texto: 'Agregar Usuario' },
    { ruta: '/usuarios/listado-usuario', texto: 'Listado Usuario' },
    { ruta: '/dashboard/clientes/agregar-cliente', texto: 'Agregar Cliente' },
    { ruta: '/dashboard/clientes/listado-cliente', texto: 'Listado Cliente' }
  ]

}
