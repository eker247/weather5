import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { CacheService } from 'app/core/services/cache.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {

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
  }
}
