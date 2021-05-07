import {Injectable} from '@angular/core';
import {throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import axios from 'axios';
import {ToastrService} from "ngx-toastr";
import {RutPipe} from "ng2-rut";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    endpoint = 'https://api.reservas-lab.ml';

     service = axios.create({
         baseURL: 'https://api.reservas-lab.ml/users/me',
         timeout: 20000 // request timeout
    });

    headers = new HttpHeaders()
        .set('Content-Type', 'application/json');
    public currentUser = this.getUserData;

    tokenize = new HttpHeaders()
        .set('Authorization', `bearer ` + this.token);

    constructor(
        private http: HttpClient,
        public router: Router,
        private toastr: ToastrService,
        private rutpipe: RutPipe
    ) {
    }

    get getUserData() {
        const authToken = localStorage.getItem('UserData');
        return (authToken !== null) ? JSON.parse(authToken) : null;
    }

    get token(): string {
        return localStorage.getItem('access_token');
    }
    get isLoggedIn(): boolean {
        const authToken = localStorage.getItem('access_token');
        return (authToken !== null) ? true : false;
    }

    get isUser(): boolean {
        const Role = this.currentUser.role.name;
        return (Role === 'paciente') ? true : false;
    }

    get isAdmin(): boolean {
        if (this.currentUser ) {
            return (this.currentUser.role.name === 'administrador') ? true : false;
        } else {
            return false;
        }
    }

    usrMe() {
        console.log(this.tokenize);
        return new Promise((resolve, reject) => {
            this.service.get('/', { headers: {"Authorization" : `Bearer ${this.token}`} })
                .then(ex => {
                    axios.get('https://api.reservas-lab.ml/users/' + ex.data.id, {headers: {"Authorization" : `Bearer ${this.token}`} })
                        .then(
                            val => {
                                resolve(val.data);
                            }
                        );
                });
        });
    }

    // Sign-up
    signUp(user: any): any {
        const api = `${this.endpoint}/auth/local/register`;
        return axios.post(api, user);
    }

    // Sign-in
    signIn(user: any) {
        const processecedusr = user;
        if (user.identifier.includes('@')) {
        } else {
            processecedusr.identifier = this.rutpipe.transform(user.identifier);
        }
        return axios.post<any>(`${this.endpoint}/auth/local`, processecedusr)
            .then((res: any) => {
                console.log(res);
                localStorage.setItem('access_token', res.data.jwt);
                localStorage.setItem('UserData', JSON.stringify(res.data.user));

                this.currentUser = res.data.user;
                this.getUserProfile(res.data.jwt);
                this.router.navigate(['home']);
            })
            .catch(
                err => {
                    console.log(err.response.status);
                    if (err.response.status === 400) {
                        this.toastr.error('Correo o contraseña incorrectos', 'Error!');
                    }

                }
            );
    }

    getUser() {

    }

    getToken() {
        return localStorage.getItem('access_token');
    }

    doLogout() {
        const removeToken = localStorage.removeItem('access_token');
        localStorage.removeItem('UserData');
        if (removeToken == null) {
            this.router.navigate(['home']);
        }
    }

    // User profile
    getUserProfile(token: string): any {

        const api = `${this.endpoint}/auth/me`;
        return axios.get(api, {headers: this.headers})
            .then(
                res => {
                    console.log(res);

                    return res || {};
                }
            );
    }

    // Error
    handleError(error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(msg);
    }
}


