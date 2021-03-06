import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {VoicecallComponent} from './voicecall.component';

const routes: Routes = [
    {
        path: '',
        component: VoicecallComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VoicecallRoutingModule {
}
