import { NgModule } from '@angular/core';
import { ActionReducer, combineReducers, StoreModule} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { RouterStoreModule} from '@ngrx/router-store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { createSelector} from 'reselect';
import { Auth} from '../domain';
import * as authActions from '../actions/auth.action';

import { compose } from '@ngrx/core/compose';

import * as fromAuth from './auth.reducer';

export interface State {
  auth: Auth;
  router: fromRouter.RouterState;
}
const reducers  = {
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);
const initState = {
  auth: fromAuth.initialState,
  router: fromRouter.initialState
}

export function reducer(state: any, action: any) {
  if ( action.type === authActions.ActionTypes.LOGOUT ) {
    return initState;
  }
  return productionReducer(state, action);
}
export const getAuthState = (state: State) => state.auth;
export const getRouterState = (state: State) => state.router;

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ]
})
export class AppStoreModule {}
