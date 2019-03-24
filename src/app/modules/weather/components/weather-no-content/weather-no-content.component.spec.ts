import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNoContentComponent } from './weather-no-content.component';

describe('WeatherNoContentComponent', () => {
  let component: WeatherNoContentComponent;
  let fixture: ComponentFixture<WeatherNoContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherNoContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherNoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
