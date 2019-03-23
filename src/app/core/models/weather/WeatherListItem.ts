import { WeatherSys } from './WeatherSys';
import { WeatherWind } from './WeatherWind';
import { WeatherMain } from './WeatherMain';
import { WeatherClouds } from './WeatherClouds';
import { WeatherGeneral } from './WeatherGeneral';

export class WeatherListItem {
  clouds: WeatherClouds;
  dt: number;
  dt_txt: string;
  main: WeatherMain;
  sys: WeatherSys;
  weather: WeatherGeneral;
  wind: WeatherWind;

  constructor(obj: any = null) {
    this.clouds = new WeatherClouds(obj.clouds);
    this.dt = obj.dt;
    this.dt_txt = obj.dt_txt;
    this.main = new WeatherMain(obj.main);
    this.sys = new WeatherSys(obj.sys);
    this.weather = new WeatherGeneral(obj.weather);
    this.wind = new WeatherWind(obj.wind);
  }
}
