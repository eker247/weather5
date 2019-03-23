import { WeatherCity } from './WeatherCity';
import { WeatherListItem } from './WeatherListItem';

export class WeatherResponse {
  city: WeatherCity;
  cnt: number;
  cod: string;
  list: WeatherListItem[];
  message: number;

  constructor(obj: any = null) {
    if (obj) {
      this.city = new WeatherCity(obj.city);
      this.list = obj.list.map((r: any) => new WeatherListItem(r));
      this.cnt = obj.cnt;
      this.cod = obj.cod;
      this.message = obj.message;
    }
  }
}
