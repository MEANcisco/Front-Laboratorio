import { TestBed } from '@angular/core/testing';

import { AdminpaneService } from './adminpane.service';

describe('AdminpaneService', () => {
  let service: AdminpaneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminpaneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
