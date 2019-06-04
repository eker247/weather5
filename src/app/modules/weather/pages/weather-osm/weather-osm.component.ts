import { Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { WeatherService } from '../../../../core/services/weather.service';

declare var ol: any;

@Component({
  selector: 'app-weather-osm',
  templateUrl: './weather-osm.component.html',
  styleUrls: ['./weather-osm.component.scss']
})
export class WeatherOsmComponent implements OnInit {

  isMapVisible = true;
  weatherResp$: Observable<WeatherResponse>;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.setWeatherNavMessage('Map of');
    this.weatherResp$ = this.weatherService.weather$;
  }
}
