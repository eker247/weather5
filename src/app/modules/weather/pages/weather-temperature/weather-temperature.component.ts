import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../core/services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.scss']
})
export class WeatherTemperatureComponent implements OnInit {

  temperature$: Observable<number[]>;
  hour$: Observable<string[]>;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.setWeatherNavMessage('Temperature in');
    this.temperature$ = this.weatherService.temperature$;
    this.hour$ = this.weatherService.forecastTime$;
  }
}
