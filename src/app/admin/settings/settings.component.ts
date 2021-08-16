import {Component, OnInit, ViewChild} from '@angular/core';
import {
    CalendarOptions,
    DateSelectArg,
    EventClickArg,
    EventApi,
    EventInput} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import esLocale from '@fullcalendar/core/locales/es';
import {FiredatabaseService} from '../../services/firedatabase.service';
@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    locales = [esLocale];
    calendarVisible = true;
    currentEvents = [];
    calendarOptions: CalendarOptions;
    constructor(
        private calsv: FiredatabaseService
    ) {
    }

    ngOnInit(): void {
        this.loadCalendar();
    }

    loadCalendar() {
        this.calendarVisible = false;
        this.calsv.getCalendar().subscribe((catsSnapshot) => {
                this.currentEvents = [];
                catsSnapshot.forEach((catData: any) => {
                    this.currentEvents.push(catData.payload.doc.data());
                });
                console.log(this.currentEvents);
            });
        setTimeout(() => {
            this.calendarOptions = {
                locale: esLocale,
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                },
                initialView: 'dayGridMonth',
                events: this.currentEvents,
                weekends: true,
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                select: this.handleDateSelect.bind(this),
                eventClick: this.handleEventClick.bind(this),
                eventsSet: this.handleEvents.bind(this)
                /* you can update a remote database when these fire:
                eventAdd:
                eventChange:
                eventRemove:
                */
            };
        }, 1000);
        this.calendarVisible = true;
    }
    handleCalendarToggle() {
        this.calendarVisible = !this.calendarVisible;
    }

    handleWeekendsToggle() {
        const { calendarOptions } = this;
        calendarOptions.weekends = !calendarOptions.weekends;
    }

    handleDateSelect(selectInfo: DateSelectArg) {
        console.log(selectInfo);
        const title = prompt('Añada un titulo para su evento.');
        const calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {

            this.calsv.createCalendar({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay,
                disponible: true
            }).then(
                v => {
                    this.loadCalendar();
                }
            );
        }
    }

    handleEventClick(clickInfo: EventClickArg) {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            clickInfo.event.remove();
        }
    }

    handleEvents(events: EventApi[])
    {
        this.currentEvents = events;
    }


}
