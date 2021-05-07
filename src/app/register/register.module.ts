import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {Ng2Rut} from 'ng2-rut';


@NgModule({
    declarations: [RegisterComponent],
    imports: [
        CommonModule,
        FormsModule,
        RegisterRoutingModule,
        Ng2Rut,
        ReactiveFormsModule
    ]
})
export class RegisterModule {
}
