import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import esLocale from '@fullcalendar/core/locales/es';
import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsComponent} from './settings.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


FullCalendarModule.registerPlugins([
    dayGridPlugin,
    timeGridPlugin,
    interactionPlugin
]);

@NgModule({
    declarations: [SettingsComponent],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        FullCalendarModule
    ]
})
export class SettingsModule {
}
