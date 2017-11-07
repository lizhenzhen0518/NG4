import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { of} from 'rxjs/observable/of';
import { Observable} from 'rxjs/Observable';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor() {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return of(true);
  }

}
