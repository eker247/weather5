import { Routes } from '@angular/router';

import {
  WeatherHumidityComponent,
  WeatherMainComponent,
  WeatherPressureComponent,
  WeatherTemperatureComponent,
  WeatherWindComponent
} from 'app/modules/weather';
import { WeatherOsmComponent } from 'app/modules/weather/pages/weather-osm/weather-osm.component';

export const AdminLayoutRoutes: Routes = [
  // { path: 'weather', loadChildren: '../../../modules/weather/weather.module#WeatherModule' },
  { path: '', redirectTo: 'weather' },
  { path: 'humidity', component: WeatherHumidityComponent },
  { path: 'weather', component: WeatherMainComponent },
  { path: 'pressure', component: WeatherPressureComponent },
  { path: 'temperature', component: WeatherTemperatureComponent },
  { path: 'wind', component: WeatherWindComponent },
  { path: 'map', component: WeatherOsmComponent },
];
