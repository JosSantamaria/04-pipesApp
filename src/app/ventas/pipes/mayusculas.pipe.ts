import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
  
    transform( valor:string, enMayusculas:boolean = true ): string{
        //console.log(valor);

        //Transformacion de texto y retorno.
        // if(enMayusculas){
        //     return valor.toUpperCase();
        // }else{
        //     return valor.toLowerCase();
        //  }
        
        //////Operador Ternario.
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase()
    }

}

