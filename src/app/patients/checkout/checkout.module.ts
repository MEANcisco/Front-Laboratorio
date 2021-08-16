import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';

import {CheckoutRoutingModule} from './checkout-routing.module';
import {CheckoutComponent} from './checkout.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    declarations: [CheckoutComponent],
    imports: [
        CommonModule,
        FormsModule,
        CheckoutRoutingModule,
        MatButtonModule
    ]
})
export class CheckoutModule {
}
