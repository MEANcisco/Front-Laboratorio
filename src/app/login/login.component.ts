import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CommonServiceService} from '../common-service.service';

import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    isPatient = false;
    doctors: any = [];
    patients: any = [];
    ident = {
        identifier: '',
        password: ''
    };

    constructor(
        public router: Router,
        public commonService: CommonServiceService,
        private toastr: ToastrService,
        private auth: AuthService,

    ) {

        this.doctors = [];
        this.patients = [];
    }

    ngOnInit(): void {
        this.getpatients();
        this.getDoctors();
    }

    checkType(event) {
        this.isPatient = event.target.checked ? true : false;
    }

    login(name) {
        this.auth.signIn(name);
    }

    getDoctors() {
        this.commonService.getDoctors().subscribe((res) => {
            this.doctors = res;
        });
    }

    getpatients() {
        this.commonService.getpatients().subscribe((res) => {
            this.patients = res;
        });
    }
}
