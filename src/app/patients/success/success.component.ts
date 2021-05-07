import {Component, OnInit} from '@angular/core';
import {ReqAppointService} from 'src/app/services/req-appoint.service';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
    exData: any;

    constructor(
        public req: ReqAppointService
    ) {
    }

    async ngOnInit(): Promise<void> {
        this.exData = await this.req.getOneExam();

    }

}
