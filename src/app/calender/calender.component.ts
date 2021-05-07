import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import timeGridPlugin from '@fullcalendar/timegrid';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import frLocale from '@fullcalendar/core/locales/fr';

declare var FullCalendar: any;
@Component({
    selector: 'app-calender',
    templateUrl: './calender.component.html',
    styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
    ngOnInit() {
        const calendarEl = document.getElementById('calendar');

        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialDate: new Date(),
            editable: true,
            selectable: true,
            businessHours: true,
            dayMaxEvents: true, // allow "more" link when too many events
            headerToolbar: {
                start: 'prev,next today',
                center: 'title',
                end: 'dayGridMonth,dayGridWeek,dayGridDay',
            },
            themeSystem: 'bootstrap',
            events: [
                {
                    title: 'All Day Event',
                    start: '2020-06-01',
                },
                {
                    title: 'Long Event',
                    start: '2020-06-07',
                    end: '2020-06-10',
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2020-06-09T16:00:00',
                },
                {
                    groupId: 999,
                    title: 'Repeating Event',
                    start: '2020-06-16T16:00:00',
                },
                {
                    title: 'Conference',
                    start: '2020-06-11',
                    end: '2020-06-13',
                },
                {
                    title: 'Meeting',
                    start: '2020-06-12T10:30:00',
                    end: '2020-06-12T12:30:00',
                },
                {
                    title: 'Lunch',
                    start: '2020-06-12T12:00:00',
                },
                {
                    title: 'Meeting',
                    start: '2020-06-12T14:30:00',
                },
                {
                    title: 'Happy Hour',
                    start: '2020-06-12T17:30:00',
                },
                {
                    title: 'Dinner',
                    start: '2020-06-12T20:00:00',
                },
                {
                    title: 'Birthday Party',
                    start: '2020-06-13T07:00:00',
                },
            ],
        });

        calendar.render();
    }
}
