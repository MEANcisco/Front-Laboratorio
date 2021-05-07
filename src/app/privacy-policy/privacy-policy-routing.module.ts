import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrivacyPolicyComponent} from './privacy-policy.component';

const routes: Routes = [
    {
        path: '',
        component: PrivacyPolicyComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class PrivacyPolicyRoutingModule {
}
