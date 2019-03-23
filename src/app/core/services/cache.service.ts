import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WeatherResponse } from '../models/weather/WeatherResponse';

const WEATHER_KEY = 'w5-cache-weather-';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private _newWeatherSubject = new Subject<void>();
  newWeather$ = this._newWeatherSubject.asObservable();

  constructor() { }

  setItem(name: string, item: Object): void {
    localStorage.setItem(`${WEATHER_KEY}${name}`, JSON.stringify(item));
  }

  getItem(name: string): Object {
    const str = localStorage.getItem(`${WEATHER_KEY}${name}`);
    return str ? JSON.parse(str) : undefined;
  }

  setWeather(weather: WeatherResponse) {
    this.setItem('current-weather', weather);
    this._newWeatherSubject.next();
  }

  getWeather(): WeatherResponse {
    return this.getItem('current-weather') ? new WeatherResponse(this.getItem('current-weather')) : undefined;
  }
}
