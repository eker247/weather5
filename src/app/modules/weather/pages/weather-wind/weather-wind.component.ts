import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../../../../core/services/weather.service';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

interface WindVM {
  date: moment.Moment;
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

  weatherResp$: Observable<WindVM[]>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.setWeatherNavMessage('Wind in');
    this.weatherResp$ = this.weatherService.weather$.pipe(
      map(weather => {
        return weather.list.map(item => ({
          date: moment(item.dt_txt),
          wind: {
            deg: item.wind.deg,
            speed: item.wind.speed
          }
        }));
      })
    );
  }
}
