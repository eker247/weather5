import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherMainComponent } from './pages/weather-main/weather-main.component';
import { WeatherTemperatureComponent } from './pages/weather-temperature/weather-temperature.component';

const routes: Routes = [
  { path: '', component: WeatherMainComponent },
  { path: 'temperature', component: WeatherTemperatureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
