import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppGuard implements CanActivate {

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  /*  if (sessionStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }*/
  }
}

@Injectable()
export class StableApiGuard implements CanActivate {
  private auth: Observable<any>;

  constructor() {
    this.auth = new Observable(ob => {
      ob.next(true);
      /*this.userSrv.getConnectivityStatus().subscribe((res) => {
        if (!res || !res['sql'] || (res && res['sql'] && res['sql']['status'] !== 'connected')) {
          this.router.navigate(['/error']);
          ob.next(false);
        } else {
          ob.next(true);
        }
      }, (err) => {
        this.router.navigate(['/error']);
        console.log('error', err);
        ob.next(false);
      });*/
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth;
  }
}
