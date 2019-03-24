import { Component, OnInit } from '@angular/core';
import { CacheService } from 'app/core/services/cache.service';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { WeatherWind } from 'app/core/models/weather/WeatherWind';

@Component({
  selector: 'app-weather-wind',
  templateUrl: './weather-wind.component.html',
  styleUrls: ['./weather-wind.component.scss']
})
export class WeatherWindComponent implements OnInit {

  weatherResp: WeatherResponse;

  constructor(private _cs: CacheService) { }

  ngOnInit() {
    this.initData();
    this._cs.newWeather$.subscribe(() => {
      this.initData();
    });
  }

  initData() {
    this.weatherResp = this._cs.getWeather();
    console.log(this.weatherResp);
  }
}
