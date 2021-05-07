import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminInvoiceComponent} from './admin-invoice.component';

const routes: Routes = [
    {
        path: '',
        component: AdminInvoiceComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminInvoiceRoutingModule {
}
