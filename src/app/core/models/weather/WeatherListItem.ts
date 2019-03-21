import { WeatherSys } from './WeatherSys';
import { WeatherWind } from './WeatherWind';
import { WeatherMain } from './WeatherMain';
import { WeatherClouds } from './WeatherClouds';
import { WeatherGeneral } from './WeatherGeneral';

export interface WeatherListItem {
  clouds: WeatherClouds;
  dt: number;
  dt_txt: string;
  main: WeatherMain;
  sys: WeatherSys;
  weather: WeatherGeneral;
  wind: WeatherWind;
}
