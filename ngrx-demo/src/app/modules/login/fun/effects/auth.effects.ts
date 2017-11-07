import { Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import { Action} from '@ngrx/store';
import * as authAction from '../actions/auth.action';
import { Observable} from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import { Router } from '@angular/router';
import { AuthService} from '../services/auth.service';
@Injectable()
export class AuthEffects {
  constructor(private action$: Actions,
              private authSevice: AuthService,
              private router: Router) {}

  @Effect()
  login$: Observable<Action> = this.action$
    .ofType(authAction.ActionTypes.LOGIN)
    .map(toPayload)
    .switchMap(action => {
      return this.authSevice
        .login(action.email,  action.password);
    })
    .map(auth => new authAction.LoginSuccessAction(auth))
    .catch(err => of(new authAction.LoginFailAction({
      status: 501,
      message: err.message,
      exception: err.stack,
      path: '/login',
      timestamp: new Date()
    })));
  @Effect()
  register$: Observable<Action> = this.action$
    .ofType(authAction.ActionTypes.REGISTER)
    .map(toPayload)
    .switchMap(val => this.authSevice.register(val)
      .map(auth => new authAction.RegiserSuccessAction(auth))
      .catch(err => of( new authAction.RegisterFailAction(err))));
  @Effect()
  navigateHome$: Observable<Action>  = this.action$
    .ofType(authAction.ActionTypes.LOGIN_SUCCESS)
    .do(() => this.router.navigateByUrl('/start'));
  @Effect()
  registerToHome$: Observable<Action> = this.action$
    .ofType(authAction.ActionTypes.REGISTER_SUCCESS)
    .do(() => this.router.navigateByUrl('/start'));
  @Effect()
  logout$: Observable<Action> = this.action$
    .ofType(authAction.ActionTypes.LOGOUT)
    .do(() => this.router.navigateByUrl('/start'));
}
