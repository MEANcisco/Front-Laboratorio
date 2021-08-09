import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PatientsRoutingModule} from './patients-routing.module';

import {PatientsComponent} from './patients.component';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ComponentComponent} from './component/component.component';
import { ExamenesComponent } from './examenes/examenes.component';
import { DomiciliosComponent } from './domicilios/domicilios.component';
import { AgmCoreModule } from '@agm/core';
import {Daterangepicker} from "ng2-daterangepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        PatientsComponent,
        SidemenuComponent,
        ComponentComponent,
        ExamenesComponent,
        DomiciliosComponent
    ],

    imports: [
        CommonModule,
        PatientsRoutingModule,
        NgbModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBP-JMT8_AILVviqrmiqNviw7TeSCXG1rw',
            libraries: ['places']
        }),
        Daterangepicker,
        FormsModule,
        ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PatientsModule {
}
