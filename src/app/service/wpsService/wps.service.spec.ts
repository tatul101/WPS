import { TestBed, inject } from '@angular/core/testing';

import { WPSService } from './wps.service';

describe('WPSService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WPSService]
    });
  });

  it('should be created', inject([WPSService], (service: WPSService) => {
    expect(service).toBeTruthy();
  }));
});
