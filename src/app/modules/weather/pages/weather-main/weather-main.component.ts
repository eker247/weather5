import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../core/services/weather.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { WeatherResponse } from '../../../../core/models/weather/WeatherResponse';
import { WeatherListItem } from '../../../../core/models/weather/WeatherListItem';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.scss']
})
export class WeatherMainComponent implements OnInit {
  resp: WeatherResponse;
  list: Observable<WeatherListItem[]>;

  constructor(private _ws: WeatherService) { }

  ngOnInit() {
    this._ws.getWeatherForTownMock('as').pipe(tap(console.log)).subscribe(r => this.resp = r);
    // this.list = this._ws.getWeatherForTownMock().pipe(map(r => r.list), tap(console.log));
  }
}
