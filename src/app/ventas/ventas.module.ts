import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Prime NG 
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
//Componentes propios
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [
    //Componentes
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    //Pipes
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports:[
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
