import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

export const FeatureKey = 'categoryState';

export interface CategoryState {

}

export const reducers: ActionReducerMap<CategoryState> = {

};


export const metaReducers: MetaReducer<CategoryState>[] = isDevMode() ? [] : [];
