export class WeatherWind {
  speed: number;
  deg: number;

  constructor(obj: any = null) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
