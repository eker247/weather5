import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { W5LayoutComponent } from 'app/layout/w5-layout/w5-layout.component';

describe('W5LayoutComponent', () => {
  let component: W5LayoutComponent;
  let fixture: ComponentFixture<W5LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ W5LayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(W5LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
