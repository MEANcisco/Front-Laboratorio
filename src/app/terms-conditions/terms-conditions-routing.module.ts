import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TermsConditionsComponent} from './terms-conditions.component'

const routes: Routes = [
    {
        path: '',
        component: TermsConditionsComponent
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TermsConditionsRoutingModule {
}
