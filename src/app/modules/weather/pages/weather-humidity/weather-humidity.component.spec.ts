import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHumidityComponent } from './weather-humidity.component';

describe('WeatherHumidityComponent', () => {
  let component: WeatherHumidityComponent;
  let fixture: ComponentFixture<WeatherHumidityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHumidityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
