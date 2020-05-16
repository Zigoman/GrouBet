import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ExternalService } from '../services/external.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CanLoadApplicationGuard implements CanActivate {

  constructor(private external: ExternalService,
              private http: HttpClient) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return new Observable(observer => {
      if (!localStorage.getItem('data')) {
        this.getJSON().subscribe(metaData => {
          localStorage.setItem('data', JSON.stringify(metaData));
          observer.next(true);
        });

      } else {
        observer.next(true);
      }
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/metadata/data.json');
  }

}
