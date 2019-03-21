import { WeatherCoord } from './WeatherCoord';

export interface WeatherCity {
  coord: WeatherCoord;
  country: string;
  id: number;
  name: string;
  population: number;
}