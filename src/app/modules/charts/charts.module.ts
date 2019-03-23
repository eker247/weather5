import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWideComponent } from './chart-wide/chart-wide.component';
import { ChartsModule as NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ChartWideComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
  ],
  exports: [
    ChartWideComponent
  ]
})
export class ChartsModule { }
