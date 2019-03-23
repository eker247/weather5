import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWideComponent } from './chart-wide.component';

describe('ChartWideComponent', () => {
  let component: ChartWideComponent;
  let fixture: ComponentFixture<ChartWideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
