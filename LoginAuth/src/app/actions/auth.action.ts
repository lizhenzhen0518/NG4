import { Action} from '@ngrx/store';
import { type} from '../util/type.util';
import { Auth, Err, User} from '../domain';

// 定义每个状态 的 标识付
export const ActionTypes = {
  LOGIN: type('[Auth] Login'),
  LOGIN_SUCCESS: type('[Auth] Login Success'),
  LOGIN_FAIL: type('[Auth] Login Fail'),
  REGISTER: type('[Auth] Register'),
  REGISTER_SUCCESS: type('[Auth] Register Success'),
  REGISTER_FAIL: type('[Auth] Register Fail'),
  LOGOUT: type('[Auth] Logout')
};
// 登录
export class LoginAction implements Action {
  type = ActionTypes.LOGIN;
  constructor(public payload: { email: string, password: string }) { }
}
// 登录成功
export class LoginSuccessAction implements Action {
  type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: Auth) {}
}
// 登录失败
export class LoginFailAction implements Action {
  type = ActionTypes.LOGIN_FAIL;
  constructor(public payload: Err) {}
}
// 注册
export class RegisterAction implements  Action {
  type = ActionTypes.REGISTER;
  constructor(public payload: User) {}
}
// 注册成功
export class RegisterSuccessAction implements Action {
  type = ActionTypes.REGISTER_SUCCESS;
  constructor(public payload: Auth) {}
}
// 注册失败
export class RegisterFailAction implements Action {
  type = ActionTypes.REGISTER_FAIL;
  constructor(public payload: Err) {}
}
// 退出登录
export class LogoutAction implements Action {
  type = ActionTypes.LOGOUT;
  constructor(public payload: Auth) {}
}
// 为什么要 使用 type  ???
export type Actions
  = LoginAction
  | LoginSuccessAction
  | LoginFailAction
  | RegisterAction
  | RegisterSuccessAction
  | RegisterFailAction
  | LogoutAction;
