import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../../../../core/services/weather.service';

@Component({
  selector: 'app-weather-humidity',
  templateUrl: './weather-humidity.component.html',
  styleUrls: ['./weather-humidity.component.scss']
})
export class WeatherHumidityComponent implements OnInit {

  humidity$: Observable<number[]>;
  hour$: Observable<string[]>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.humidity$ = this.weatherService.humidity$;
    this.hour$ = this.weatherService.forecastTime$;
  }
}
