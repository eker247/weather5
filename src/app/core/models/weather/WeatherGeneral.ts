export class WeatherGeneral {
  id: number;
  main: string;
  description: string;
  icon: string;

  constructor(obj: any = null) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
