import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { CacheService } from 'app/core/services/cache.service';

@Component({
  selector: 'app-weather-humidity',
  templateUrl: './weather-humidity.component.html',
  styleUrls: ['./weather-humidity.component.scss']
})
export class WeatherHumidityComponent implements OnInit {

  weatherResp: WeatherResponse;
  humidities: number[];
  hours: string[];

  constructor(private _cs: CacheService) { }

  ngOnInit() {
    this.initData();
    this._cs.newWeather$.subscribe(() => {
      this.initData();
    });
  }

  initData() {
    this.weatherResp = this._cs.getWeather();
    if (this.weatherResp) {
      this.humidities = this.weatherResp.list.map(wli => wli.main.humidity);
      this.hours = this.weatherResp.list.map(wli => wli.dt_txt.substring(0, 16));
    }
  }
}
