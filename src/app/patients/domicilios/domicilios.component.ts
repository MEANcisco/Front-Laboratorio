import { Component, OnInit } from '@angular/core';
import {ReqAppointService} from '../../services/req-appoint.service';
import * as moment from 'moment';
import {HttpClient, HttpEvent, HttpEventType, HttpHeaders} from '@angular/common/http';
import { MouseEvent } from '@agm/core';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.css']
})
export class DomiciliosComponent implements OnInit {
  name = 'Angular 5';
  progress;
  lat = 51.678418;
  lng = 7.809007;
  myForm = new FormGroup({
    files: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  exData;
  header;
  doctorId;
  doctorDetails;
  userDetails;
  active = [
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing',
    'timing'
  ];

  datasend = {
    fecha: this.req.exaData.day,
    users_permissions_user: this.authy.currentUser.id,
    examene: this.req.exaData.examen,
    orden: '',
    direccion: '',
    geo: {
      lat: 0,
      lng: 0
    }
  };
  public daterange: any = {};
  public options: any = {
    locale: {format: 'YYYY-MM-DD'},
    alwaysShowCalendars: false,
  };
  getDate(val): string {
    const dt = moment(val, 'YYYY-MM-DD HH:mm:ss');

    return dt.lang('es').format('dddd');
  }
  constructor(private req: ReqAppointService,
              private http: HttpClient,
              private authy: AuthService,
              private router: Router,
              private toastr: ToastrService){
    if (navigator)
    {
      navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }
  public selectedDate(value: any, datepicker?: any) {
    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

  changeDirection(data ) {
    this.http.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Avenida+alessandri&key=AIzaSyBP-JMT8_AILVviqrmiqNviw7TeSCXG1rw');
  }
  markerDragEnd(lat, lng, $event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    const geocoder = new google.maps.Geocoder();
    const latlng = new google.maps.LatLng(this.lat, this.lng);
    this.datasend.geo.lat = this.lat;
    this.datasend.geo.lng = this.lng;
    console.log(this.datasend);
  }
  async ngOnInit(): Promise<void> {
    this.exData = await this.req.getOneExam();
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
       'Access-Control-Allow-Headers': '*',
       'Access-Control-Allow-Origin': '*'
    });
  }
  submit( ) {
    const formData = new FormData();
    formData.append('files', this.myForm.get('fileSource').value);
    this.http.post('https://api.reservas-lab.ml/upload', formData)
        .subscribe(res => {
          console.log(res[0].url);
          alert('Se ha subido el archivo correctamente.');
          this.datasend.orden = 'https://api.reservas-lab.ml' + res[0].url;
        });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
    console.log(event);
    const formData = new FormData();
    formData.append('files', this.myForm.get('fileSource').value);
    this.http.post('https://api.reservas-lab.ml/upload', formData,  {
      reportProgress: true,
      observe: 'events'// tslint:disable-next-line:no-shadowed-variable
    }).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('La petición se ha hecho!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Se recibieron cabeceras!');
          break;
        case HttpEventType.UploadProgress:
          this.progress = Math.round(event.loaded / event.total * 100);
          console.log(`Subido: ${this.progress}%`);
          break;
        case HttpEventType.Response:
          console.log('Se ha subido exitosamente!', event.body[0].url);
          this.datasend.orden = 'https://api.reservas-lab.ml' + event.body[0].url;
          setTimeout(() => {
            this.progress = 0;
          }, 1500);

      }
    });
    // .subscribe((event: HttpEvent<any>) => {

    //   console.log(event.body.res[0].url);

    //   alert('Se ha subido el archivo correctamente.');
    //   this.formula.video = 'https://api.mat9.cl' + res[0].url;
    // });
  }

  sendData() {
    this.http.post('https://api.reservas-lab.ml/domicilios', this.datasend)
        .subscribe(
            d => {
              console.log(d);
              this.router.navigate(['home']);
              this.toastr.success('Pronto recibirá una confirmación por correo.', 'Se ha creado exitosamente su solicitud');
            }
        );
  }
}
