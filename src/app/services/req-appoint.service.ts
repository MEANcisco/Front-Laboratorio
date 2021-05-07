import {Injectable} from '@angular/core';
import axios from 'axios';
import {AuthService} from './auth.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class ReqAppointService {
    exaData = {
        day: '',
        examen: 0
    };

    getExReq = axios.create({
        baseURL: 'https://api.reservas-lab.ml/examenes',
        timeout: 200000,

    });

    getAdmReq = axios.create(
        {
            baseURL: 'https://api.reservas-lab.ml/reservas',
            timeout: 200000
        }
    );
    getOExReq = axios.create({
        baseURL: 'https://api.reservas-lab.ml/examenes',
        timeout: 200000,

    });
    getUser = axios.create({
        baseURL: 'https://api.reservas-lab.ml/users',
        timeout: 200000,

    });

    constructor(
        private user: AuthService,
        private router: Router,
        private toastr: ToastrService
    ) {
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            this.getUser.get('/', {
                params: {
                    _limit: 1000
                }
            })
                .then(ex => {
                    resolve(ex.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    getAppoints() {
        return new Promise((resolve, reject) => {
            this.getAdmReq.get('/', {
                params: {
                    _limit: 1000
                }
            })
                .then(ex => {
                    resolve(ex.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    postAppoint() {
        axios.post('https://api.reservas-lab.ml/reservas', {
            examen: this.exaData.examen,
            valor: 'texto prueba',
            status: 'Pendiente',
            appoint: this.exaData.day,
            users_permissions_user: this.user.currentUser.id
        })
            .then(
                data => {
                    console.log(data);
                    this.router.navigate(['home']);
                    this.toastr.success('El comprobante llegará a su correo en unos minutos', 'Su reserva se ha hecho con éxito');
                }
            );
    }

    getExams() {
        return new Promise((resolve, reject) => {
            this.getExReq.get('/', {
                params: {
                    _limit: 1000
                }
            })
                .then(ex => {
                    resolve(ex.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    getOneExam() {
        return new Promise((resolve, reject) => {
            this.getExReq.get('/' + this.exaData.examen, {
                params: {
                    _limit: 1000
                }
            })
                .then(ex => {
                    resolve(ex.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

}
