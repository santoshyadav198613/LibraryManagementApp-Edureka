import { TestBed, inject } from '@angular/core/testing';

import { NewstudentService } from './newstudent.service';

describe('NewstudentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewstudentService]
    });
  });

  it('should be created', inject([NewstudentService], (service: NewstudentService) => {
    expect(service).toBeTruthy();
  }));
});
