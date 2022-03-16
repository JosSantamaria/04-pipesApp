import { Component} from '@angular/core';
//Interval rxjs
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
    //options i18nSelect
    nombre: string = 'Jos';
    genero: string = 'masculino'

    //mapa para i18nSelect
    invitacionMapa = {
      'masculino': 'invitarlo',
      'femenino': 'invitarla'
    }

    // i18nPlural

    clientes: string[] = ['Jos','Maria','Robert','Mariela','Braulio','Nain','Angel']
    clienteMap = {
      '=0' : 'no tenemos clientes esperando',
      '=1' : 'tenemos # cliente esperando',
      '=2': 'tenemos # clientes esperando..',
      'other': 'tenemos # clientes esperando..'
    }

    cambiarPersona(){
      this.nombre = 'Maria';
      this.genero = 'femenino';
    }
    

    borrarCliente(){
      // this.clientes.splice(0,1)
      //pop: elimina el ultimo elemento del arreglo.
      this.clientes.pop() 
    }
    
    persona = {
      nombre:'Joset',
      edad:21,
      ciudad: 'Merida',
      estado: 'Yucatan'
    }

    //JsonPipe

    heroes = [{nombre:'Spiderman',universo:'Marvel',habilidad:'telaraña'},
              {nombre:'IronMan',universo:'Marvel',habilidad:'Tecnologia'},
              {nombre:'Batman',universo:'DC',habilidad:'Dinero'},
              {nombre:'Superman',universo:'DC',habilidad:'Volar'}]  

    //AsyncPipe
    miObservable = interval(5000); //0,1,2,3,4... emite numeros...

    valorPromesa = new Promise((resolve,reject)=>{

      setTimeout( ()=>{
          resolve('!! Tenemos data de promesa..');
      },3500);

    });



  }
