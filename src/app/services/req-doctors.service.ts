import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReqDoctorsService {

  constructor() { }

  getDoctors = axios.create(
      {
        baseURL: 'https://api.reservas-lab.ml/doctores',
        timeout: 200000
      }
  );

  getterDoctors() {
    return new Promise((resolve, reject) => {
      this.getDoctors.get('/', {
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
