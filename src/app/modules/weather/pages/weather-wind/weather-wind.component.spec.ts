import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWindComponent } from './weather-wind.component';

describe('WeatherWindComponent', () => {
  let component: WeatherWindComponent;
  let fixture: ComponentFixture<WeatherWindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherWindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
