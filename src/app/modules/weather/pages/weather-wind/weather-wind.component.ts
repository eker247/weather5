import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { Observable } from 'rxjs';
import { WeatherService } from '../../../../core/services/weather.service';

@Component({
  selector: 'app-weather-wind',
  templateUrl: './weather-wind.component.html',
  styleUrls: ['./weather-wind.component.scss']
})
export class WeatherWindComponent implements OnInit {

  weatherResp$: Observable<WeatherResponse>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherResp$ = this.weatherService.weather$;
  }
}
