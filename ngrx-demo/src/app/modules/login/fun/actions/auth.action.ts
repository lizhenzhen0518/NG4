import { Action } from '@ngrx/store';
import { type } from '../../../../fun/util/type.util';
import { Auth, Err , User} from '../../../../fun/domain';

export const ActionTypes = {
  LOGIN: type('[ Auth ] Login'),
  LOGIN_SUCCESS: type( '[ Auth] Login_success'),
  LOGIN_fAIL: type('[ Auth ] Login_fail'),
  REGISTER: type( '[ Auth ] Register'),
  REGISTER_SUCCESS: type( '[ Auth ] Register_success'),
  REGISTER_FAILE: type( '[ Auth ] Register_fail'),
  LOGOUT: type('[Auth] Logout')
};

export class LoginAction implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor(public payload: {email: string, password: string}) { }
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: Auth) {}
}
export class LoginFailAction implements Action {
  readonly type = ActionTypes.LOGIN_fAIL;
  constructor(public payload: Err) {}
}
export class RegisterAction implements Action {
  readonly type = ActionTypes.REGISTER;
  constructor(public payload: User) {}
}
export class RegiserSuccessAction implements Action {
  readonly type = ActionTypes.REGISTER_SUCCESS;
  constructor(public payload: Auth) {}
}
export class RegisterFailAction implements Action {
  readonly type = ActionTypes.REGISTER_FAILE;
  constructor(public payload: Err) {}
}
export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;
  constructor(public payload: Auth) {}
}
export type Actions = LoginSuccessAction
                | LoginFailAction
                | RegisterAction
                | RegiserSuccessAction
                | RegisterFailAction
                | LogoutAction;
