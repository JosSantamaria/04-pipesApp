import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items =
    [
      {label:'Pipes de Angular',
        icon:'pi pi-desktop',
        items:
        [
          {
            label:'Textos y Fechas',
            icon:'pi pi-align-left',
            routerLink:' '
          },
          {
            label:'Numeros',
            icon:'pi pi-dollar',
            routerLink:'numeros'
          },
          {
            label:'No Comunes',
            icon:'pi pi-pound',
            routerLink:'no-comunes'
          }
        ]
       
      },
      {
        label:'Pipes Personalizados',
        icon:'pi pi-cog',
        items:
        [
          {
            label:'Textos',
            icon:'pi pi-align-left',
            routerLink:' '
          }
        ]
      }
      
    ]
    
  }

}
