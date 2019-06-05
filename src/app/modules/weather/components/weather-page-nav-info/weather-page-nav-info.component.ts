import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../core/services/weather.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather-page-nav-info',
  templateUrl: './weather-page-nav-info.component.html',
  styleUrls: ['./weather-page-nav-info.component.scss']
})
export class WeatherPageNavInfoComponent implements OnInit {

  message$: Observable<string>;
  weatherTownName$: Observable<string>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.message$ = this.weatherService.weatherNavMessage$;
    this.weatherTownName$ = this.weatherService.weatherTownName$;
  }
}
