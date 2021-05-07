import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CommonServiceService} from './../../common-service.service';
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-sidemenu',
    templateUrl: './sidemenu.component.html',
    styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
    name;

    constructor(
        private router: Router,
        public commonService: CommonServiceService,
        public authS: AuthService
    ) {
    }

    ngOnInit(): void {
    }

    logout() {
        localStorage.clear();
        localStorage.removeItem('UserData');
        this.commonService.nextmessage('logout');
        this.router.navigate(['/']);
    }

    navigate(name) {
        this.name = name;
        this.commonService.nextmessage(name);
    }
}
