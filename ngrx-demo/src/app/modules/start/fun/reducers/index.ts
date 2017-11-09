import { NgModule } from '@angular/core';

import * as fromQuote from './quote.reducer';
import * as fromTask from './task.reducer';

import {
  StoreModule,
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

export interface FeatureState {
  quote: fromQuote.State;
  task: fromTask.State;
}

export const getQuoteFeatureSelector = createFeatureSelector<fromQuote.State>('quote');

export const getQuote = createSelector( getQuoteFeatureSelector,  fromQuote.getQuote);

export const getTaskFeatureSelector = createFeatureSelector<fromTask.State>('task');

export const getTask = createSelector( getTaskFeatureSelector,  fromTask.getTask);


@NgModule({
  imports: [
    StoreModule.forFeature('quote', fromQuote.reducer),
    StoreModule.forFeature('task', fromTask.reducer)

  ],
  providers: [

  ],
})
export class AppStoreModule { }
