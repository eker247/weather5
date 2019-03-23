import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../models/weather/WeatherResponse';
import { environment } from '../../../environments/environment';

// For more api calls look at:
// https://openweathermap.org/forecast5

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForTown(townName: string): Observable<any> {
    // http://api.openweathermap.org/data/2.5/forecast?q=Warsaw,pl&mode=json&appid=57265cc26548195e01e286470fa79020
    return this.http.get(environment.api.forecast, { params: {
      q: townName,
      mode: 'json',
      appid: environment.api.key
    }});
  }

  getWeatherForTownMock(name: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>('/assets/tmp-warsaw.json');
  }

  getWeatherByCoordinates(): Observable<WeatherResponse> {
    // http://api.openweathermap.org/data/2.5/forecast?q=Warsaw,pl&mode=json&appid=57265cc26548195e01e286470fa79020

    return this.http.get<WeatherResponse>(environment.api.forecast, { params: {
      lat: '35',
      lon: '139',
      appid: environment.api.key
    }});
  }
}
