import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherForTown(): Observable<any> {
    // http://api.openweathermap.org/data/2.5/forecast?q=Warsaw,pl&mode=json&appid=57265cc26548195e01e286470fa79020
    return this.http.get(environment.api.townWeather, { params: {
      q: 'Warsaw,pl',
      mode: 'json',
      appid: '57265cc26548195e01e286470fa79020'
    }});
  }
}
