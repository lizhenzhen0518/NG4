import { Auth} from '../domain';
import * as actions from '../actions/auth.action';
import { go } from '@ngrx/router-store';
export const initialState: Auth = {
  token: ''
};

export function reducer(state: Auth = initialState, action: actions.Actions): Auth {
  switch ( action.type ) {
    case actions.ActionTypes.LOGIN_SUCCESS:
    case actions.ActionTypes.REGISTER_SUCCESS: {
      const auth = <Auth>action.payload;
      return {
        token: auth.token,
        userId: auth.user.id
      };
    }
    case actions.ActionTypes.LOGIN_FAIL:
    case actions.ActionTypes.REGISTER_FAIL: {
      const auth = <Auth>action.payload;
      return {
         token: '',
         err: auth.err
       };
    }
    default: {
      return state;
    }
  }
}
export const getAuth = (state: Auth) => state;
