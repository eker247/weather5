export class WeatherMain {
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;

  constructor(obj: any = null) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
