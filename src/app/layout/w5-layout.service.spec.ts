import { TestBed } from '@angular/core/testing';

import { W5LayoutService } from 'app/layout/w5-layout.service';

describe('W5LayoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: W5LayoutService = TestBed.get(W5LayoutService);
    expect(service).toBeTruthy();
  });
});
