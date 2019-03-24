import { Component, OnInit } from '@angular/core';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { CacheService } from 'app/core/services/cache.service';

@Component({
  selector: 'app-weather-pressure',
  templateUrl: './weather-pressure.component.html',
  styleUrls: ['./weather-pressure.component.scss']
})
export class WeatherPressureComponent implements OnInit {

  weatherResp: WeatherResponse;
  pressures: number[];
  hours: string[];
  isChartVisible = true;

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
      this.pressures = this.weatherResp.list.map(wli => wli.main.pressure);
      this.hours = this.weatherResp.list.map(wli => wli.dt_txt.substring(0, 16));
      this.resetChart();
    }
  }


  resetChart() {
    this.isChartVisible = false;
    setTimeout(() => {
      this.isChartVisible = true;
    }, 10);
  }
}
