import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KelvinToCelsiusPipe } from './kelvin-to-celsius.pipe';
import { NoMsPipe } from './no-ms.pipe';

@NgModule({
  declarations: [
    KelvinToCelsiusPipe,
    NoMsPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    KelvinToCelsiusPipe,
    NoMsPipe,
  ]
})
export class PipesModule { }
