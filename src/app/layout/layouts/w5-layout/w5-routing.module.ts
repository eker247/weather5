import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { WeatherOsmComponent } from 'app/modules/weather/pages/weather-osm/weather-osm.component';
import {
  WeatherHumidityComponent,
  WeatherMainComponent,
  WeatherPressureComponent,
  WeatherTemperatureComponent,
  WeatherWindComponent
} from 'app/modules/weather';

export const W5Routes: Routes = [
  // { path: 'weather', loadChildren: '../../../modules/weather/weather.module#WeatherModule' },
  { path: '', pathMatch: 'full', redirectTo: 'weather' },
  { path: 'humidity', component: WeatherHumidityComponent },
  { path: 'weather', component: WeatherMainComponent },
  { path: 'pressure', component: WeatherPressureComponent },
  { path: 'temperature', component: WeatherTemperatureComponent },
  { path: 'wind', component: WeatherWindComponent },
  { path: 'map', component: WeatherOsmComponent },
];

export default RouterModule.forChild(W5Routes);
