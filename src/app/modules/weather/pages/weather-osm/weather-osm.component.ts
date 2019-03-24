import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CacheService } from 'app/core/services/cache.service';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';

declare var ol: any;

let map: any;

@Component({
  selector: 'app-weather-osm',
  templateUrl: './weather-osm.component.html',
  styleUrls: ['./weather-osm.component.scss']
})
export class WeatherOsmComponent implements OnInit, OnDestroy {

  windowWidth: Subscription;
  isMapVisible = true;
  weatherResp: WeatherResponse;

  constructor(private _cs: CacheService) { }

  ngOnInit() {
    this.initData();
    this._cs.newWeather$.subscribe(() => {
      this.initData();
      this.resetMapSize();
    });
    this.windowWidth = fromEvent(window, 'resize').pipe(debounceTime(100)).subscribe(() => this.resetMapSize());
  }

  initData() {
    this.weatherResp = this._cs.getWeather();
  }

  resetMapSize() {
    this.isMapVisible = false;
    setTimeout(() => {
      this.isMapVisible = true;
    }, 10);
  }

  ngOnDestroy() {
    this.windowWidth.unsubscribe();
  }
}
