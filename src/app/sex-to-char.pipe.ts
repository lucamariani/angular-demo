import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexToChar'
})
export class SexToCharPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    switch(value) {
      case 0: return "M";
      case 1: return "F";
      default: return "?";
    }
  }

}
