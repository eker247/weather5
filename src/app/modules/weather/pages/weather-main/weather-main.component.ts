import { Component, OnInit} from '@angular/core';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { Observable } from 'rxjs';
import { WeatherService } from '../../../../core/services/weather.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {

  weatherResp$: Observable<WeatherResponse>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherResp$ = this.weatherService.weather$;
  }
}
