import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ScheduletimingComponent} from './scheduletiming.component';

const routes: Routes = [
    {
        path: '',
        component: ScheduletimingComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScheduletimingRoutingModule {
}
