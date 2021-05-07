import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ToastrService} from 'ngx-toastr';
import {AuthService} from 'src/app/services/auth.service';
import {ReqAppointService} from 'src/app/services/req-appoint.service';
import {CommonServiceService} from './../../common-service.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
    exaData;
    doctorDetails;
    doctorId;
    firstName;
    lastName;
    email;
    phone;
    appointments: any = [];
    patients: any = [];

    constructor(
        public req: ReqAppointService,
        private router: Router,
        private route: ActivatedRoute,
        public commonService: CommonServiceService,
        private toastr: ToastrService,
        public auth: AuthService
    ) {
    }

    async ngOnInit(): Promise<void> {
        this.exaData = await this.req.getOneExam();
        this.getDoctorsDetails();
        this.allPatients();
        this.getAppointments();
    }

    getDoctorsDetails() {
        if (!this.doctorId) {
            this.doctorId = 1;
        }
        this.commonService.getDoctorDetails(this.doctorId).subscribe((res) => {
            this.doctorDetails = res;
        });
    }

    allPatients() {
        this.commonService.getpatients().subscribe((res) => {
            this.patients = res;
        });
    }

    patientDetails() {
        let userId = localStorage.getItem('id');
        this.commonService.getPatientDetails(Number(userId)).subscribe((res) => {
            this.patients = res;
        });
    }

    getAppointments() {
        this.commonService.getAppointments().subscribe((res) => {
            this.appointments = res;
        });
    }

    booking() {
        this.req.postAppoint();
    }
}
