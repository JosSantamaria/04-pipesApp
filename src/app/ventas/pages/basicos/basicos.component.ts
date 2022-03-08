import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {
  nombreLower: string ='joset'
  nombreUpper: string ='JOSET'
  nombreCompleto: string  ='JoSet SaNtaMaRiA'

  fecha:Date = new Date(); //fecha de hoy
 

}
