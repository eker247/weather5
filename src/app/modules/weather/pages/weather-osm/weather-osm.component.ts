import { Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';
import { WeatherService } from '../../../../core/services/weather.service';
import { map } from 'rxjs/operators';

interface Coordinates {
  longitude: number;
  latitude: number;
}

@Component({
  selector: 'app-weather-osm',
  templateUrl: './weather-osm.component.html',
  styleUrls: ['./weather-osm.component.scss']
})
export class WeatherOsmComponent implements OnInit {

  coordinates$: Observable<Coordinates>;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit() {
    this.weatherService.setWeatherNavMessage('Map of');
    this.coordinates$ = this.weatherService.weather$.pipe(
      map(weather => ({
        longitude: weather.city.coord.lon,
        latitude: weather.city.coord.lat
      }))
    );
  }
}
