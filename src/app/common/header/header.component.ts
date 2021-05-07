import {ChangeDetectorRef, Component, Inject, OnInit,} from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {DOCUMENT, Location} from '@angular/common';
import {CommonServiceService} from './../../common-service.service';
import {AuthService} from 'src/app/services/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    auth = false;
    isPatient = false;
    splitVal;
    url;
    base;
    page;
    logo;

    constructor(
        @Inject(DOCUMENT) private document,
        private cdr: ChangeDetectorRef,
        public router: Router,
        location: Location,
        public authS: AuthService,
        public commonService: CommonServiceService
    ) {
    }

    ngOnInit(): void {
        console.log(this.authS.currentUser.role.type);
        if (localStorage.getItem('user') === 'true') {
            this.auth = true;
            this.isPatient = this.authS.currentUser.role.name === 'paciente' ? true : false;
        }
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                this.splitVal = event.url.split('/');
                this.base = this.splitVal[1];
                this.page = this.splitVal[2];
                if (
                    this.base === ''
                ) {
                    this.logo = true;
                } else {
                    this.logo = false;
                }

                if (
                    this.base === 'doctor' ||
                    (this.base === 'patients' && this.page === 'dashboard') ||
                    this.base === 'change-password' ||
                    this.base === 'voice-call' ||
                    this.base === 'video-call' ||
                    (this.base === 'patients' && this.page === 'favourites') ||
                    (this.base === 'patients' && this.page === 'message') ||
                    (this.base === 'patients' && this.page === 'settings') ||
                    (this.base === 'patients' && this.page === 'search-doctor') ||
                    this.base === 'map-list' ||
                    (this.base === 'patients' && this.page === 'doctor-profile') ||
                    (this.base === 'patients' && this.page === 'booking') ||
                    (this.base === 'patients' && this.page === 'checkout') ||
                    (this.base === 'patients' && this.page === 'success') ||
                    this.base === 'calender' ||
                    (this.base === 'patients' && this.page === 'component') ||
                    (this.base === 'invoice-details') ||
                    (this.base === 'blank') ||
                    (this.base === 'blog') ||
                    (this.base === 'blog-grid') ||
                    (this.base === 'blog-details')
                ) {
                    this.auth = true;
                } else {
                    this.auth = false;

                }
            }
        });
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                $('html').removeClass('menu-opened');
                $('.sidebar-overlay').removeClass('opened');
                $('.main-wrapper').removeClass('slide-nav');
            }
        });
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
        this.loadDynmicallyScript('assets/js/script.js');
    }

    loadDynmicallyScript(js) {
        let script = document.createElement('script');
        script.src = js;
        script.async = false;
        document.head.appendChild(script);
        script.onload = () => this.doSomethingWhenScriptIsLoaded();
    }

    doSomethingWhenScriptIsLoaded() {
    }

    change(name) {
        this.page = name;
        this.commonService.nextmessage('main');
    }

    mapGrid() {
        this.router.navigate(['/map-grid']);
    }

    mapList() {
        this.router.navigate(['/map-list']);
    }

    addStyle(val) {
        if (val === 'doctor') {
            if (document.getElementById('doctor').style.display == 'block') {
                document.getElementById('doctor').style.display = 'none';
            } else {
                document.getElementById('doctor').style.display = 'block';
            }
        }
        if (val === 'patient') {
            if (document.getElementById('patient').style.display == 'block') {
                document.getElementById('patient').style.display = 'none';
            } else {
                document.getElementById('patient').style.display = 'block';
            }
        }
        if (val === 'pages') {
            if (document.getElementById('pages').style.display == 'block') {
                document.getElementById('pages').style.display = 'none';
            } else {
                document.getElementById('pages').style.display = 'block';
            }
        }
        if (val === 'blog') {
            if (document.getElementById('blog').style.display == 'block') {
                document.getElementById('blog').style.display = 'none';
            } else {
                document.getElementById('blog').style.display = 'block';
            }
        }
    }

    logout() {
        localStorage.removeItem('access_token');
        this.authS.currentUser = null;
        this.router.navigate(['/home']);
    }

    home() {
        this.commonService.nextmessage('main');
        this.router.navigateByUrl('/').then(() => {
            this.router.navigate(['/']);
        });
    }

    navigate(name) {
        this.page = name;
        if (name === 'Admin') {
            this.router.navigate(['/admin']);
            this.commonService.nextmessage('admin');
        }
    }
}
