import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoctorRoutingModule} from './doctor-routing.module';
import {DoctorComponent} from './doctor.component';
import {SidemenuComponent} from './sidemenu/sidemenu.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {StickySidebarDirective} from './sticky-sidebar.directive';

@NgModule({
    declarations: [DoctorComponent, SidemenuComponent, StickySidebarDirective],
    imports: [CommonModule, DoctorRoutingModule, ModalModule.forRoot()],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DoctorModule {
}
