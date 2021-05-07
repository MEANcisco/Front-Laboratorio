import { Component, OnInit } from '@angular/core';
import {ReqAppointService} from '../../services/req-appoint.service';
import * as moment from 'moment';
import {HttpClient} from '@angular/common/http';
import { MouseEvent } from '@agm/core';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-domicilios',
  templateUrl: './domicilios.component.html',
  styleUrls: ['./domicilios.component.css']
})
export class DomiciliosComponent implements OnInit {
  name = 'Angular 5';
  lat = 51.678418;
  lng = 7.809007;
  exData;
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
              private authy: AuthService){
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
  }
  sendData() {
    this.http.post('https://api.reservas-lab.ml/domicilios', this.datasend)
        .subscribe(
            d => {
              console.log(d);
            }
        );
  }
}
