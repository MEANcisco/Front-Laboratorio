import { TestBed } from '@angular/core/testing';

import { ReqDoctorsService } from './req-doctors.service';

describe('ReqDoctorsService', () => {
  let service: ReqDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
