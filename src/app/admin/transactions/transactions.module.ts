import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTablesModule} from 'angular-datatables';
import {TransactionsRoutingModule} from './transactions-routing.module';
import {TransactionsComponent} from './transactions.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [TransactionsComponent],
    imports: [
        CommonModule,
        TransactionsRoutingModule,
        DataTablesModule,
        MatCheckboxModule,
        FormsModule
    ]
})
export class TransactionsModule {
}
