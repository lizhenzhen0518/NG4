import { NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { RouterStateUrl, CustomRouterStateSerializer } from '../util/router.util';
import * as fromRouter from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromProject from './project.reducer';


export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;

  projects: fromProject.State;
}
export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,

  projects: fromProject.reducer
};
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];



export const getProjectsState = createFeatureSelector<fromProject.State>('projects');
export const getProjects = createSelector(
  getProjectsState,
  fromProject.getProjects
);

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  providers: [
    /**
     * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
     * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
     * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
     */
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
  ],
})
export class AppStoreModule { }
