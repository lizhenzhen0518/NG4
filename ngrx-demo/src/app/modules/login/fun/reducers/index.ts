import { NgModule } from '@angular/core';


import * as fromAuth from './auth.reducer';

import {
  StoreModule,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

export interface FeatureState {

  auth: fromAuth.State;
}



export const getQuoteFeatureSelector = createFeatureSelector<fromAuth.State>('auth');

export const getAuth = createSelector( getQuoteFeatureSelector,  fromAuth.getAuth);



@NgModule({
  imports: [
    StoreModule.forFeature('auth', fromAuth.reducer),
  ],
  providers: [

  ],
})
export class AppStoreModule { }
