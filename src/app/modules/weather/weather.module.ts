import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherMainComponent } from './pages/weather-main/weather-main.component';
import { ChartsModule } from 'app/modules/charts/charts.module';
import { WeatherTemperatureComponent } from './pages/weather-temperature/weather-temperature.component';
import { WeatherPressureComponent } from './pages/weather-pressure/weather-pressure.component';
import { WeatherHumidityComponent } from './pages/weather-humidity/weather-humidity.component';
import { WeatherWindComponent } from './pages/weather-wind/weather-wind.component';
import { ArrowModule } from '../arrow/arrow.module';
import { PipesModule } from '../pipes/pipes.module';
import { WeatherOsmComponent } from './pages/weather-osm/weather-osm.component';
import { WeatherNoContentComponent } from './components/weather-no-content/weather-no-content.component';
import { WeatherMapComponent } from './components/weather-map/weather-map.component';

@NgModule({
  declarations: [
    WeatherHumidityComponent,
    WeatherMainComponent,
    WeatherOsmComponent,
    WeatherPressureComponent,
    WeatherTemperatureComponent,
    WeatherWindComponent,
    WeatherNoContentComponent,
    WeatherMapComponent,
  ],
  imports: [
    CommonModule,
    ArrowModule,
    ChartsModule,
    PipesModule,
  ],
  exports: [
    WeatherHumidityComponent,
    WeatherMainComponent,
    WeatherOsmComponent,
    WeatherPressureComponent,
    WeatherTemperatureComponent,
    WeatherWindComponent,
  ]
})
export class WeatherModule { }
