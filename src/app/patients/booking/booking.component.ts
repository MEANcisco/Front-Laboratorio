import {ReqAppointService} from './../../services/req-appoint.service';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonServiceService} from './../../common-service.service';
import * as moment from 'moment';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
    exData;
    doctorId;
    doctorDetails;
    userDetails;
    active = [
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing",
        "timing"
    ]
    public daterange: any = {};

    // see original project for full list of options
    // can also be setup using the config service to apply to multiple pickers
    public options: any = {
        locale: {format: 'YYYY-MM-DD'},
        alwaysShowCalendars: false,
    };

    constructor(
        private route: ActivatedRoute,
        public commonService: CommonServiceService,
        public req: ReqAppointService,
        public router: Router
    ) {
    }

    public selectedDate(value: any, datepicker?: any) {
        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;

        // use passed valuable to update state
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    }

    async ngOnInit(): Promise<void> {
        this.exData = await this.req.getOneExam();
        console.log(this.exData);
        if (this.req.exaData.day === '') {
            this.router.navigate(['/home'])

        }
        if (this.route.snapshot.queryParams.id) {
            this.doctorId = this.route.snapshot.queryParams.id;
        } else {
            this.doctorId = 1;
        }
    }

    getDate(val): string {
        const dt = moment(val, 'YYYY-MM-DD HH:mm:ss');

        return dt.lang("es").format('dddd');
    }

    Naver() {

    }

    getDoctorsDetails() {
        this.commonService.getDoctorDetails(this.doctorId)
            .subscribe((res) => {
                this.doctorDetails = res;
            });
    }

    patientDetails() {
        let userId;
        userId = localStorage.getItem('id');
        if (!userId) {
            userId = 1;
        }
        this.commonService.getPatientDetails(Number(userId)).subscribe((res) => {
            this.userDetails = res;
        });
    }

    changeTime(hr, min, arr) {
        const tm = moment(this.req.exaData.day).set('hours', hr - 4).set('minutes', min).toISOString();
        this.req.exaData.day = tm;
        this.active.forEach((d, i) => {
            if (d === "timing selected") {
                this.active[i] = "timing";
            }
        })
        this.active[arr] = "timing selected";
        console.log(tm, arr);
    }
}
