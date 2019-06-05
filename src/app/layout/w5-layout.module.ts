import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { W5LayoutComponent } from 'app/layout/w5-layout/w5-layout.component';
import { NavbarComponent } from 'app/layout/w5-layout/components/navbar/navbar.component';
import { SidebarComponent } from 'app/layout/w5-layout/components/sidebar/sidebar.component';
import { FooterComponent } from 'app/layout/w5-layout/components/footer/footer.component';
import { W5Routes } from 'app/layout/w5-routes';
import { WeatherModule } from 'app/modules/weather/weather.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    W5LayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(W5Routes),
    WeatherModule,
  ],
  exports: [
    W5LayoutComponent
  ]
})
export class W5LayoutModule {}
