import { Component, OnInit } from '@angular/core';
import { kelvinToCelsius } from 'app/core/functions';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { CacheService } from 'app/core/services/cache.service';

@Component({
  selector: 'app-weather-temperature',
  templateUrl: './weather-temperature.component.html',
  styleUrls: ['./weather-temperature.component.scss']
})
export class WeatherTemperatureComponent implements OnInit {

  weatherResp: WeatherResponse;
  temperatures: number[];
  hours: string[];

  constructor(private _cs: CacheService) { }

  ngOnInit() {
    this.initData();
    this._cs.newWeather$.subscribe(() => {
      this.temperatures = null;
      setTimeout(() => this.initData(), 10);
    });
  }

  initData() {
    this.weatherResp = this._cs.getWeather();
    if (this.weatherResp) {
      this.temperatures = this.weatherResp.list.map(wli => kelvinToCelsius(wli.main.temp));
      this.hours = this.weatherResp.list.map(wli => wli.dt_txt.substring(0, 16));
    }
  }
}
