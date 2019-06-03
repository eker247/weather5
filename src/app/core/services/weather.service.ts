import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { WeatherResponse } from '../models/weather/WeatherResponse';
import { environment } from '../../../environments/environment';
import { filter, map} from 'rxjs/operators';
import { kelvinToCelsius } from '../functions';

// For more api calls look at:
// https://openweathermap.org/forecast5

@Injectable({
  providedIn: 'root'
})
export class WeatherService {ś

  weatherSubject = new BehaviorSubject<WeatherResponse>(null);

  weather$ = this.weatherSubject.asObservable().pipe(
    filter(r => r !== null)
  );

  weatherTownName$ = this.weather$.pipe(
    map(r => r ? r.city.name : null)
  );

  forecastTime$ = this.weather$.pipe(
    map(weatherResp => weatherResp.list.map(wli => wli.dt_txt.substring(0, 16)))
  );

  humidity$ = this.weather$.pipe(
    map(weatherResp => weatherResp.list.map(wli => wli.main.humidity))
  );

  pressure$ = this.weather$.pipe(
    map(weatherResp => weatherResp.list.map(wli => wli.main.pressure))
  );

  temperature$ = this.weather$.pipe(
    map(weatherResp => weatherResp.list.map(wli => kelvinToCelsius(wli.main.temp)))
  );

  // wind$ = this.weather$.pipe(
  //   map(weatherResp => weatherResp.list.map(wli => wli.wind))
  // );



  constructor(private http: HttpClient) {
  }

  getWeatherForTown(townName: string): Observable<any> {
    // http://api.openweathermap.org/data/2.5/forecast?q=Warsaw,pl&mode=json&appid=57265cc26548195e01e286470fa79020
    return this.http.get(environment.api.forecast, {
      params: {
        q: townName,
        mode: 'json',
        appid: environment.api.key
      }
    });
  }

  // getWeatherForTownMock(name: string): Observable<WeatherResponse> {
  //   return this.http.get<WeatherResponse>('/assets/tmp-warsaw.json');
  // }
  //
  // getWeatherByCoordinates(): Observable<WeatherResponse> {
  //   // http://api.openweathermap.org/data/2.5/forecast?q=Warsaw,pl&mode=json&appid=57265cc26548195e01e286470fa79020
  //
  //   return this.http.get<WeatherResponse>(environment.api.forecast, {
  //     params: {
  //       lat: '35',
  //       lon: '139',
  //       appid: environment.api.key
  //     }
  //   });
  // }
}
