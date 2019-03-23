import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from 'app/modules/pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    PipesModule,
  ],
  exports: [
  ]
})
export class CoreModule { }
