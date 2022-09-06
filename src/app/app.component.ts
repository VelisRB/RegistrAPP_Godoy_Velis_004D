import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}



  componentesEnd: Componente[] = [ 
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    {
      icon: 'person-add-sharp',
      name: 'Iniciar Sesion',
      redirecTo: '/login',
    },
    {
      icon: 'wallet-outline',
      name: 'Cuenta',
      redirecTo: '/cuenta',
    },
    {
      icon: 'qr-code-outline',
      name: 'Crear QR',
      redirecTo: 'crearqr',
    },
    {
      icon: 'camera-outline',
      name: 'Escanear QR',
      redirecTo: 'escanearqr',
    },
    {
      icon: 'bug-outline',
      name: 'Sugerencias',
      redirecTo: '/sugerencia',
    },
    {
      icon: 'exit-outline',
      name: 'Cerrar Sesion',
      redirecTo: '/login',
    },
  ];









}
