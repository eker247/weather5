import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSearcherComponent } from './weather-searcher.component';

describe('WeatherSearcherComponent', () => {
  let component: WeatherSearcherComponent;
  let fixture: ComponentFixture<WeatherSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
