import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { WeatherService } from '../../../../core/services/weather.service';
import { WeatherResponse } from '../../../../core/models/weather/WeatherResponse';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-weather-searcher',
  templateUrl: './weather-searcher.component.html',
  styleUrls: ['./weather-searcher.component.scss']
})
export class WeatherSearcherComponent implements OnInit {
  keyUp = new Subject<string>();
  foundTown$: Observable<string>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchForecast();
  }

  searchForecast() {
    let searchedTown: string;

    this.foundTown$ = this.keyUp.pipe(
      // debounceTime(300),
      flatMap(townName => {
        searchedTown = townName;

        return this.weatherService.getWeatherForTown(townName).pipe(
          catchError(e => {
            return of(null);
          })
        );
      }),
      flatMap((weatherResponse: WeatherResponse) => {
        if (weatherResponse) {
          this.weatherService.weatherSubject.next(weatherResponse);
          return of(weatherResponse.city.name);
        } else {
          return of(searchedTown);
        }
      }),
      catchError(() => of(null)),
    );
  }
}
