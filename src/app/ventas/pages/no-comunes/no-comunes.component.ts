import { Component} from '@angular/core';

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

    borrarCliente(){}
    

  }
