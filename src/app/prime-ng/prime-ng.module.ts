import { NgModule } from '@angular/core';

//PimeNg Api
import { MenuItem } from 'primeng/api';
//PrimeNg Styles
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
