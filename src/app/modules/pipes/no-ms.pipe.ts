import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noMs'
})
export class NoMsPipe implements PipeTransform {

  transform(str :string): string {
    return str.slice(0, -3);
  }

}
