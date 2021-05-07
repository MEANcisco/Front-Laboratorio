import {TestBed} from '@angular/core/testing';

import {ReqAppointService} from './req-appoint.service';

describe('ReqAppointService', () => {
    let service: ReqAppointService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ReqAppointService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
