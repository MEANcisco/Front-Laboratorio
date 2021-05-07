import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AdminpaneService} from "../../services/adminpane.service";

@Component({
    selector: 'app-doc-profile',
    templateUrl: './doc-profile.component.html',
    styleUrls: ['./doc-profile.component.css'],
})
export class DocProfileComponent implements OnInit {
    changePass = false;
    personalDetails = true;

    constructor(private Router: Router,
                private admpane: AdminpaneService) {
    }

    ngOnInit(): void {
    }

    about() {
        this.changePass = false;
        this.personalDetails = true;
        document.getElementById('about').classList.add('active');
        document.getElementById('pass').classList.remove('active');
    }

    pass() {
        this.changePass = true;
        this.personalDetails = false;
        document.getElementById('about').classList.remove('active');
        document.getElementById('pass').classList.add('active');
    }

    submit() {
        this.Router.navigateByUrl('/admin/doc-profile');
    }
}
