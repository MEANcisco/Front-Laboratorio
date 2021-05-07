import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocProfileComponent} from './doc-profile.component';

const routes: Routes = [
    {
        path: '',
        component: DocProfileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocProfileRoutingModule {
}
