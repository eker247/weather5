import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherOsmComponent } from './weather-osm.component';

describe('WeatherOsmComponent', () => {
  let component: WeatherOsmComponent;
  let fixture: ComponentFixture<WeatherOsmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherOsmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherOsmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
