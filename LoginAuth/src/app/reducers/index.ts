import { NgModule } from '@angular/core';
import { ActionReducer, combineReducers, StoreModule} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { RouterStoreModule} from '@ngrx/router-store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { createSelector} from 'reselect';
import { Auth} from '../domain';
import * as authActions from '../actions/auth.action';
/**
 * compose 函数是一个很方便的工具，简单来说，它接受任意数量的函数作为参数，然后返回一个新的函数。
 * 这个新的函数其实就是前面的函数的叠加，比如说，我们给出 `compose(f(x), g(x))`, 返回的新函数
 * 就是 `g(f(x))`。
 */
import { compose } from '@ngrx/core/compose';
/**
 * storeFreeze 用于防止 state 被修改，在 Redux 中我们必须确保 state 是不可更改的，这个函数
 * 有助于帮我们检测 state 是否被有意或无意的修改了。当 state 发生修改时，会抛出一个异常，这一点
 * 在开发时非常有帮助。根据环境变量的值，发布时会不包含这个函数。
 */
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromAuth from './auth.reducer';

/**
 * 正如我们的 reducer 像数据库中的表一样，我们的顶层 state 也包含各个子 reducer 的 state
 * 并且使用一个 key 来标识各个子 state
 */
export interface State {
  auth: Auth;
  router: fromRouter.RouterState;
}
const reducers  = {
  auth: fromAuth.reducer,
  router: fromRouter.routerReducer
};

// const productionReducer: ActionReducer<State> = combineReducers(reducers);
const productionReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
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
