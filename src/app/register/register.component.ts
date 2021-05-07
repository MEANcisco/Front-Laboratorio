import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CommonServiceService} from '../common-service.service';

import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../services/auth.service';
import {FormBuilder, Validators, FormControl} from '@angular/forms';
import {RutPipe, RutValidator} from 'ng2-rut';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
    name = '';
    mobile = '';
    rut = '';
    password = '';
    reactiveForm;
    user = {
        username: '',
        email: '',
        password: '',
        nombre: '',
        apellido: '',
        telefono: '',
        direccion: ''
    };
    isPatient = true;
    doctors: any = [];
    patients: any = [];
    // tslint:disable-next-line:variable-name
    reg_type = 'Registro de pacientes';
    // tslint:disable-next-line:variable-name
    doc_patient = 'Are you a Doctor?';

    constructor(
        private rutpipe: RutPipe,
        private toastr: ToastrService,
        public commonService: CommonServiceService,
        public router: Router,
        public auth: AuthService,
        fb: FormBuilder, rutValidator: RutValidator
    ) {
        this.reactiveForm = fb.group({
            rut: ['11111111', [Validators.required, rutValidator]]
        });
    }

    ngOnInit(): void {
        this.getpatients();
        this.getDoctors();
    }

    changeRegType() {
        if (this.reg_type === 'Doctor Register') {
            this.reg_type = 'Patient Register';
            this.doc_patient = 'Are you a Doctor?';
            this.isPatient = true;
        } else {
            this.reg_type = 'Doctor Register';
            this.doc_patient = 'Not a Doctor?';
            this.isPatient = false;
        }
    }

    signup() {
        this.user.username = this.rutpipe.transform(this.user.username);
        this.auth.signUp(this.user)
            .then(
                res => {
                    console.log(res);
                    this.toastr.success('Se ha registrado con Éxito', res.data.user.nombre + ' ' + res.data.user.apellido);
                    this.router.navigate(['/home']);
                }
            )
            .catch(
                err => {
                    if (err.status === 400 ) {
                        this.toastr.success('Puede que el usuario ya se encuentre registrado', 'Hubo un error!');
                    }
                }
            );
    }

    getDoctors() {
        this.commonService.getDoctors().subscribe((res) => {
            this.doctors = res;
        });
    }

    getpatients() {
        this.commonService.getpatients().subscribe((res) => {
            this.patients = res;
        });
    }
}
