import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'JoSeT SantAMAriA'
  valor: number = 10000;
  obj = {
    nombre: 'Jos',
    apellido: 'Cervantes'
  }


  mostrarNombre(){
    
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
    
  }

}
