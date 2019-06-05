import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPageNavInfoComponent } from './weather-page-nav-info.component';

describe('WeatherPageNavInfoComponent', () => {
  let component: WeatherPageNavInfoComponent;
  let fixture: ComponentFixture<WeatherPageNavInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherPageNavInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPageNavInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
