import { Pipe, PipeTransform } from '@angular/core';
import { kelvinToCelsius } from 'app/core/functions';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(kelvin: never): number {
    return kelvinToCelsius(kelvin);
  }

}
