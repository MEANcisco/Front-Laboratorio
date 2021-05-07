import {Component, Inject, OnInit} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {Event, NavigationEnd, Router} from "@angular/router";
import {CommonServiceService} from "../../common-service.service";
import {AuthService} from "../../services/auth.service";

declare const $: any;

@Component({
    selector: "app-sidemenu",
    templateUrl: "./sidemenu.component.html",
    styleUrls: ["./sidemenu.component.css"],
})
export class SidemenuComponent implements OnInit {
    page = "Dashboard";
    showDropdown = true;
    public bellCollapsed = true;
    public userCollapsed = true;

    constructor(
        @Inject(DOCUMENT) private document,
        public router: Router,
        private commonService: CommonServiceService,
        public authy: AuthService
    ) {
    }

    ngOnInit(): void {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                $("html").removeClass("menu-opened");
                $(".sidebar-overlay").removeClass("opened");
                $(".main-wrapper").removeClass("slide-nav");
            }
        });
    }

    ngAfterViewInit() {
        this.loadDynmicallyScript("assets/admin/js/script.js");
    }

    loadDynmicallyScript(js) {
        var script = document.createElement("script");
        script.src = js;
        script.async = false;
        document.head.appendChild(script);
        script.onload = () => this.doSomethingWhenScriptIsLoaded();
    }

    doSomethingWhenScriptIsLoaded() {
    }

    change(name) {
        this.page = name;
        this.commonService.nextmessage("admin");
    }

    main() {
        this.commonService.nextmessage("main");
        // this.router.navigateByUrl('/',{ skipLocationChange: true }).then(()=>{
        //   window.location.reload('/')
        //      this.router.navigate(['/']);
        //   //;
        // })
    }

    clickLogout() {
        window.location.href = "/home";
    }

    bell() {
        this.bellCollapsed = !this.bellCollapsed;
        if (!this.userCollapsed) {
            this.userCollapsed = true;
        }
    }

    user() {
        this.userCollapsed = !this.userCollapsed;
        if (!this.bellCollapsed) {
            this.bellCollapsed = true;
        }
    }
}
