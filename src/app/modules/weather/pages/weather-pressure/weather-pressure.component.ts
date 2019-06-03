import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from '../../../../core/services/weather.service';

@Component({
  selector: 'app-weather-pressure',
  templateUrl: './weather-pressure.component.html',
  styleUrls: ['./weather-pressure.component.scss']
})
export class WeatherPressureComponent implements OnInit {

  pressure$: Observable<number[]>;
  hour$: Observable<string[]>;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.pressure$ = this.weatherService.pressure$;
    this.hour$ = this.weatherService.forecastTime$;
  }
}
