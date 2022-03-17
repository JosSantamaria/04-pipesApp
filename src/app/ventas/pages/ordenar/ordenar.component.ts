import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {
  enMayusculas:boolean = true;

  heroes:Heroe[] = [
    {
      nombre:'Superman',
      vuela:true,
      color:Color.verde
    },
    {
      nombre:'Batman',
      vuela:false,
      color:Color.negro
    },
    {
      nombre:'Linterna Verde',
      vuela:false,
      color:Color.verde
    },
    {
      nombre:'Daredevil',
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:'Spiderman',
      vuela:false,
      color:Color.azul
    },
    {
      nombre:'Ironman',
      vuela:true,
      color:Color.verde
    }
  ]
    en(){
      this.enMayusculas = !this.enMayusculas;
    }
}
