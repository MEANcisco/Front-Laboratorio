import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PatientsComponent} from './patients.component';
import {BookingGuard} from '../guards/booking.guard';
import {ExamenesComponent} from "./examenes/examenes.component";
import {DomiciliosComponent} from "./domicilios/domicilios.component";


const routes: Routes = [
    {
        path: '',
        component: PatientsComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: 'favourites',
                loadChildren: () =>
                    import('./favourites/favourites.module').then(
                        (m) => m.FavouritesModule
                    ),
            },
            {
                path: 'booking',
                canActivate: [BookingGuard],
                loadChildren: () =>
                    import('./booking/booking.module').then((m) => m.BookingModule),
            },
            {
                path: 'component',
                loadChildren: () =>
                    import('./component/component.module').then((m) => m.ComponentModule),
            },
            {
                path: 'patient-profile',
                loadChildren: () =>
                    import('./patient-profile/patient-profile.module').then(
                        (m) => m.PatientProfileModule
                    ),
            },
            {
                path: 'domicilios',
                canActivate: [BookingGuard],
                component: DomiciliosComponent
            },
            {
                path: 'add-billing',
                loadChildren: () =>
                    import('./add-billing/add-billing.module').then(
                        (m) => m.AddBillingModule
                    ),
            },
            {
                path: 'edit-billing',
                loadChildren: () =>
                    import('./edit-billing/edit-billing.module').then(
                        (m) => m.EditBillingModule
                    ),
            },
            {
                path: 'add-prescription',
                loadChildren: () =>
                    import('./add-prescription/add-prescription.module').then(
                        (m) => m.AddPrescriptionModule
                    ),
            },
            {
                path: 'add-prescription',
                loadChildren: () =>
                    import('./edit-prescription/edit-prescription.module').then(
                        (m) => m.EditPrescriptionModule
                    ),
            },
            {
                path: 'edit-prescription',
                loadChildren: () =>
                    import('./add-prescription/add-prescription.module').then(
                        (m) => m.AddPrescriptionModule
                    ),
            },
            {
                path: 'doctor-profile',
                loadChildren: () =>
                    import('./doctor-profile/doctor-profile.module').then(
                        (m) => m.DoctorProfileModule
                    ),
            },
            {
                path: 'settings',
                loadChildren: () =>
                    import('./settings/settings.module').then((m) => m.SettingsModule),
            },
            {
                path: 'search-doctor',
                loadChildren: () =>
                    import('./search-doctor/search-doctor.module').then(
                        (m) => m.SearchDoctorModule
                    ),
            },
            {
                path: 'message',
                loadChildren: () =>
                    import('./../doctor/messages/messages.module').then(
                        (m) => m.MessagesModule
                    ),
            },
            {
                path: 'success',
                canActivate: [BookingGuard],
                loadChildren: () =>
                    import('./success/success.module').then((m) => m.SuccessModule),
            },
            {
                path: 'examenes',
                component: ExamenesComponent
            },
            {
                path: 'checkout',
                canActivate: [BookingGuard],
                loadChildren: () =>
                    import('./checkout/checkout.module').then((m) => m.CheckoutModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PatientsRoutingModule {
}
