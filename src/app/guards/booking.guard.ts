import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ReqAppointService} from '../services/req-appoint.service';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanActivate {
  constructor(
      private req: ReqAppointService,
      private router: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.req.exaData.examen !== 0 && this.req.exaData.day !== '')
    {
      return true;
    }
    else {
        this.router.navigate(['home']);
        return false;
    }
  }
}
