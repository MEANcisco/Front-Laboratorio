import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookingRoutingModule} from './booking-routing.module';
import {BookingComponent} from './booking.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {Daterangepicker} from 'ng2-daterangepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [BookingComponent],
    imports: [
        CommonModule,
        BookingRoutingModule,
        NgbModule,
        Daterangepicker,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule
    ]
})
export class BookingModule {
}
