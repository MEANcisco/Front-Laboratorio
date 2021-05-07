import {Component, OnInit} from '@angular/core';
import {Event, NavigationStart, Router} from '@angular/router';
import {CommonServiceService} from './../common-service.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
    splitVal;
    base = 'Patients';
    page = 'Dashboard';
    url;
    patientSidebar: boolean = false;

    constructor(
        private router: Router,
        location: Location,
        public commonService: CommonServiceService
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                if (
                    event.url === '/patients/dashboard' ||
                    event.url === '/patients/favourites' ||
                    event.url === '/patients/settings' ||
                    event.url === '/patients/message'

                ) {
                    this.patientSidebar = true;

                } else {
                    this.patientSidebar = false;

                }
            }
        });
        this.url = location.path();
        if (
            this.url === '/patients/dashboard' ||
            this.url === '/patients/favourites' ||
            this.url === '/patients/settings'
        ) {
            this.patientSidebar = true;
        } else {
            this.patientSidebar = false;
        }
    }

    ngOnInit(): void {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.splitVal = event.url.split('/');
                this.base = this.splitVal[1];
                this.page = this.splitVal[2];
            }
        });
    }
}
