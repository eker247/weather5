export class WeatherCoord {
  lat: number;
  lon: number;

  constructor(obj: any = null) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
