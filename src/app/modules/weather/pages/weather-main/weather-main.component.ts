import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { Observable } from 'rxjs';
import { WeatherService } from '../../../../core/services/weather.service';
import { map, tap } from 'rxjs/operators';

interface MainForecast {
  date: string;
  temperature: number;
  windSpeed: number;
  windDirection: number;
  pressure: number;
  humidity: number;
}

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {

  forecast$: Observable<MainForecast[]>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.forecast$ = this.weatherService.weather$.pipe(
      tap(console.log),
      map(r =>
        r.list.map(item => ({
          date: item.dt_txt,
          temperature: item.main.temp,
          windSpeed: item.wind.speed,
          windDirection: item.wind.deg,
          pressure: item.main.pressure,
          humidity: item.main.humidity
        })),
      )
    );
    this.weatherService.setWeatherNavMessage('Weather in');

  }
}
