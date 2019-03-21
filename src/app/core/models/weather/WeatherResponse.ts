import { WeatherCity } from './WeatherCity';
import { WeatherListItem } from './WeatherListItem';

export interface WeatherResponse {
  city: WeatherCity;
  cnt: number;
  cod: string;
  list: WeatherListItem[];
  message: number;
}
