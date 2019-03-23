import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPressureComponent } from './weather-pressure.component';

describe('WeatherPressureComponent', () => {
  let component: WeatherPressureComponent;
  let fixture: ComponentFixture<WeatherPressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
