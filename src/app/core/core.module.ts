import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
  ],
  exports: [
  ]
})
export class CoreModule { }
