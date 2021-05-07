import {Component, OnInit} from '@angular/core';
import {CommonServiceService} from './../../common-service.service';
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    appointments;
    patients;

    constructor(public commonService: CommonServiceService,
                private authS: AuthService) {
    }

    async ngOnInit(): Promise<void> {
        this.getPatients();
        this.appointments = await this.authS.usrMe();
        console.log(await this.authS.usrMe());
    }



    getPatients() {
        this.commonService.getpatients()
            .subscribe(res => {
                this.patients = res;
            })
    }


}
