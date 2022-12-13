import { Pipe, PipeTransform } from '@angular/core';
import Artikal from '../model/artikal';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(artikli: Artikal[], input: string): Artikal[] {
    if(input) {
      return artikli.filter(artikal => artikal.sifra === input);
    } else {
      return artikli;
    }
  }

}
