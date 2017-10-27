import { TestBed, inject } from '@angular/core/testing';

import { NewinterceptorService } from './newinterceptor.service';

describe('NewinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewinterceptorService]
    });
  });

  it('should be created', inject([NewinterceptorService], (service: NewinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
