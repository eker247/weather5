import { WeatherCoord } from './WeatherCoord';

export class WeatherCity {
  coord: WeatherCoord;
  country: string;
  id: number;
  name: string;
  population: number;

  constructor(obj: any = null) {
    if (obj) {
      this.coord = new WeatherCoord(obj.coord);
      this.country = obj.country;
      this.id = obj.id;
      this.name = obj.name;
      this.population = obj.population;
    }
  }
}