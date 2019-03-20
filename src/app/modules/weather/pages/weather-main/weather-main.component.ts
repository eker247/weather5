import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.sass']
})
export class WeatherMainComponent implements OnInit {

  constructor(private _ws: WeatherService) { }

  ngOnInit() {
    this._ws.getWeatherForTownMock().subscribe(r => console.log(r));
  }
}
