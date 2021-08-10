import {Component, OnInit} from '@angular/core';
import {CalendarOptions} from '@fullcalendar/core';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        events: [
            { title: 'event 1', date: '2021-08-08' },
            { title: 'event 2', date: '2021-08-08' }
        ]
    };

    constructor() {
    }

    ngOnInit(): void {
    }

}
