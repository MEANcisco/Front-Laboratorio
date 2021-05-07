import {AuthInterceptor} from './interceptors/auth.interceptor';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {Ng2Rut, RutPipe} from 'ng2-rut';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DataService} from './data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import localeEsCL from '@angular/common/locales/es-CL';
import { AgmCoreModule } from '@agm/core';

import {ToastrModule} from 'ngx-toastr';
import {JwtModule} from '@auth0/angular-jwt';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {Daterangepicker} from 'ng2-daterangepicker';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {LinkService} from './link.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

registerLocaleData(localeEsCL, 'es-CL');


const firebaseConfig = {
    apiKey: 'AIzaSyBP-JMT8_AILVviqrmiqNviw7TeSCXG1rw',
    authDomain: 'laboratorio-aleman.firebaseapp.com',
    databaseURL: 'https://laboratorio-aleman-default-rtdb.firebaseio.com',
    projectId: 'laboratorio-aleman',
    storageBucket: 'laboratorio-aleman.appspot.com',
    messagingSenderId: '255378639745',
    appId: '1:255378639745:web:f1e85c1d00f9165b95f680'
};

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, RutPipe],
    imports: [
        BrowserModule,
        AppRoutingModule,
        Ng2Rut,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => JSON.parse(localStorage.getItem('actualusr')).jwt
            },
        }),
        HttpClientModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        SlickCarouselModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        FormsModule,
        NgbModule,
        Daterangepicker,
    ],
    providers: [LinkService,
        RutPipe,
        {provide: localeEsCL, useValue: 'es-CL'},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }],
    bootstrap: [AppComponent],
})
export class AppModule {
}
