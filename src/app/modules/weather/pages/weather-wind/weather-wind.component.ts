import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from 'app/core/services/weather.service';
import { map } from 'rxjs/operators';

interface WindVM {
  date: string;
  wind: {
    speed: number,
    deg: number
  };
}

@Component({
  selector: 'app-weather-wind',
  templateUrl: './weather-wind.component.html',
  styleUrls: ['./weather-wind.component.scss']
})
export class WeatherWindComponent implements OnInit {

  windForecast$: Observable<WindVM[]>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.setWeatherNavMessage('Wind in');
    this.windForecast$ = this.weatherService.weather$.pipe(
      map(weather => {
        return weather.list.map(item => ({
          date: item.dt_txt,
          wind: {
            deg: item.wind.deg,
            speed: item.wind.speed
          }
        }));
      }),
    );
  }
}
