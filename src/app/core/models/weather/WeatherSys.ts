export class WeatherSys {
  pod: string;

  constructor(obj: any = null) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
