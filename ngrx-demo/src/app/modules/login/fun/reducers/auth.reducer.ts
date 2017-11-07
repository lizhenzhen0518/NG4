import { Auth} from '../../../../fun/domain';
import * as authActions from '../actions/auth.action';

export interface State  {
  auth: Auth;
}
export const initalState: State = {
  auth: {}
};

export function reducer(state: State = initalState, action: authActions.Actions) {
  switch (action.type) {
    case authActions.ActionTypes.LOGIN:
    case authActions.ActionTypes.LOGIN_SUCCESS: {
      const auth = <Auth> action.payload;
      return {...state, auth: auth};
    }
    case authActions.ActionTypes.REGISTER:
    case authActions.ActionTypes.REGISTER_SUCCESS: {
      const auth = <Auth> action.payload;
      return {...state, auth: auth};
    }
    case authActions.ActionTypes.LOGIN_fAIL:
    case authActions.ActionTypes.REGISTER_FAILE: {
      const auth = <Auth> action.payload;
      return {...state, auth: auth};
    }
    default: {
      return state;
    }
  }
}
export const getAuth = ( state: State) =>  state.auth ;
