import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, flatMap, map, mapTo, tap } from 'rxjs/operators';
import { WeatherService } from 'app/core/services/weather.service';
import { WeatherResponse } from 'app/core/models/weather/WeatherResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather-searcher',
  templateUrl: './weather-searcher.component.html',
  styleUrls: ['./weather-searcher.component.scss']
})
export class WeatherSearcherComponent implements OnInit {

  searcherForm: FormGroup;
  foundTown$: Observable<string>;

  constructor(
    private weatherService: WeatherService,
    private formBuilder: FormBuilder,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.searcherForm = this.formBuilder.group({
      searcher: ['', Validators.required]
    });
    this.searchForecast();
  }

  searchForecast() {
    let searchedTown: string;

    this.foundTown$ = this.searcherForm.valueChanges.pipe(
      map(() => {
        return this.searcherForm.controls.searcher.value;
      }),

      debounceTime(400),

      flatMap(townName => {
        searchedTown = townName;

        if (townName.length < 3) {
          return of(null);
        }

        return this.weatherService.getWeatherForTown(townName).pipe(
          catchError((err) => {
            this.toast.error(err.statusText, 'Error');
            return of(null);
          }),
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
    );
  }
}
